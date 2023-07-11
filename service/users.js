import {
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { db } from './app';
import { removePostByCategory } from './post';

const createUser = async ({ email }) => {
  await setDoc(doc(db, 'users', email), {
    interestedTags: [],
    selection: [],
    categoryList: [],
  });
};

const getUser = async ({ email }) => {
  const userRef = await getDoc(doc(db, 'users', email));

  return { ...userRef.data(), id: userRef.id };
};

const getUserCategoryNames = async ({ email }) => {
  const snapshot = await getDocs(collection(db, 'users', email, 'category'));

  return snapshot.docs.map(({ id }) => id);
};

const getUserCategoryList = async ({ email }) => {
  const snapshot = await getDocs(collection(db, 'users', email, 'category'));

  const categoryQuery = category =>
    query(collection(db, 'posts'), where('email', '==', email), where('category', '==', category));

  const categoryList = await Promise.all(
    snapshot.docs.map(async doc => {
      const category = doc.id;
      const categoryData = doc.data();
      const snapshot = await getCountFromServer(categoryQuery(category));

      return { category, count: snapshot.data().count, ...categoryData, updateAt: categoryData.updateAt.toMillis() };
    })
  );

  return categoryList;
};

const getCategoryInfo = async ({ email, category }) => {
  const snapshot = await getDoc(doc(db, 'users', email, 'category', category));

  return snapshot.data();
};

const getSavedPosts = async ({ email, page = 0, pageSize = 5 }) => {
  const { savedPosts } = getUser({ email });
  const slicedList = savedPosts.slice(page * pageSize, page * pageSize + pageSize);

  const posts = await Promise.all(
    slicedList.map(async postId => {
      const snapshot = await getDoc(doc(db, 'posts', postId));

      return { id: postId, ...snapshot.data() };
    })
  );

  return posts;
};

const updateUserInfo = async ({ email, userInfo }) => {
  await updateDoc(doc(db, 'users', email), userInfo);
};

const setCategory = async ({ email, category, thumbnail = null }) => {
  const categoryRef = doc(db, 'users', email, 'category', category);

  await runTransaction(db, async transaction => {
    const snapshot = await transaction.get(categoryRef);

    if (!snapshot.exists()) transaction.set(categoryRef, { thumbnail, updateAt: serverTimestamp() });
  });
};

const updateCategory = async ({ email, category, categoryInfo }) => {
  await updateDoc(doc(db, 'users', email, 'category', category), { ...categoryInfo });
};

const changeCategoryName = async ({ email, category, categoryName }) => {
  const categoryRef = doc(db, 'users', email, 'category', category);
  const newCategoryRef = doc(db, 'users', email, 'category', categoryName);
  const q = query(collection(db, 'posts'), where('email', '==', email), where('category', '==', category));

  const categorySnapshot = await getDoc(categoryRef);
  const newCategorySnapshot = await getDoc(newCategoryRef);
  const postsSnapshot = await getDocs(q);

  const batch = writeBatch(db);

  if (!newCategorySnapshot.exists()) batch.set(newCategoryRef, categorySnapshot.data());

  batch.delete(categoryRef);
  postsSnapshot.docs.forEach(post => {
    batch.update(doc(db, 'posts', post.id), { category: categoryName });
  });

  await batch.commit();
};

const removeCategory = async ({ email, category }) => {
  await deleteDoc(doc(db, 'users', email, 'category', category));
  await removePostByCategory({ email, category });
};

const updateInterestedTagList = async ({ email, tags }) => {
  const userRef = doc(db, 'users', email);

  await runTransaction(db, async transaction => {
    const userDoc = await transaction.get(userRef);

    const { interestedTagList } = userDoc.data();

    transaction.update(userRef, {
      interestedTagList: [...interestedTagList, ...tags.map(({ name }) => name)],
    });
  });
};

export {
  createUser,
  getUser,
  getCategoryInfo,
  getSavedPosts,
  getUserCategoryList,
  getUserCategoryNames,
  updateInterestedTagList,
  setCategory,
  updateCategory,
  removeCategory,
  changeCategoryName,
  updateUserInfo,
};
