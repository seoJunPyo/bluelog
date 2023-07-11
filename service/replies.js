import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { db } from './app';

const getRepliesCount = async ({ commentId }) => {
  const q = query(collection(db, 'replies'), where('commentId', '==', commentId));

  const snapshot = await getCountFromServer(q);

  return snapshot.data().count;
};

const getReplies = async ({ commentId }) => {
  const q = query(collection(db, 'replies'), where('commentId', '==', commentId), orderBy('createAt', 'desc'));

  const snapshot = await getDocs(q);

  return snapshot.docs.map(reply => {
    const replyData = reply.data();

    return { ...replyData, createAt: replyData.createAt.toMillis(), id: reply.id };
  });
};

const createReply = async ({ commentId, replyInfo }) => {
  await addDoc(collection(db, 'replies'), { commentId, ...replyInfo, createAt: serverTimestamp(), like: [] });
};

const editReply = async ({ replyId, content }) => {
  await updateDoc(doc(db, 'replies', replyId), { content });
};

const toggleLikeReply = async ({ replyId, checked, email }) => {
  await updateDoc(doc(db, 'replies', replyId), {
    like: checked ? arrayRemove(email) : arrayUnion(email),
  });
};

const removeReply = async ({ replyId }) => {
  await deleteDoc(doc(db, 'replies', replyId));
};

const removeRepliesByCommentId = async ({ commentId }) => {
  const q = query(collection(db, 'replies'), where('commentId', '==', commentId));

  const repliesSnapshot = await getDocs(q);
  const ids = repliesSnapshot.docs.map(reply => reply.id);

  const batch = writeBatch(db);

  ids.forEach(id => {
    batch.delete(doc(db, 'replies', id));
  });

  await batch.commit();
};

export { getRepliesCount, getReplies, createReply, editReply, toggleLikeReply, removeReply, removeRepliesByCommentId };
