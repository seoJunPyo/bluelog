import {
  collection,
  doc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  runTransaction,
  setDoc,
  writeBatch,
} from 'firebase/firestore';
import { db } from './app';

const getTags = async () => {
  const q = query(collection(db, 'tags'), orderBy('count'), limit(15));

  const tagsSnapshot = await getDocs(q);

  return tagsSnapshot.docs.map(tag => ({ ...tag.data(), name: tag.id }));
};

const createTag = async ({ name }) => {
  const tagRef = await setDoc(doc(db, 'tags', name));

  return tagRef.id;
};

const createTags = async tags => {
  await runTransaction(db, async transaction => {
    tags.forEach(async tag => {
      const tagRef = doc(db, 'tags', tag);

      const snapshot = await transaction.get(tagRef);

      if (!snapshot.exists()) transaction.set(tagRef, { count: 0 });
    });
  });
};

const updateTagCount = async tags => {
  const batch = writeBatch(db);

  tags.forEach(tag => {
    batch.update(doc(db, 'tags', tag), { count: increment(1) });
  });

  await batch.commit();
};

export { getTags, createTag, createTags, updateTagCount };
