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
import { getCurrentUser } from './auth';
import { removeRepliesByCommentId } from './replies';

const getCommentCount = async postId => {
  const q = query(collection(db, 'comments'), where('postId', '==', postId));

  const snapshot = await getCountFromServer(q);

  return snapshot.data().count;
};

const getCommentCounts = async posts => {
  const commentCounts = await Promise.all(
    posts.map(async ({ objectID }) => {
      const count = await getCommentCount(objectID);

      return { [objectID]: count };
    })
  );

  return commentCounts.reduce((countObj, count) => ({ ...countObj, ...count }), {});
};

const getComments = async postId => {
  const q = query(collection(db, 'comments'), where('postId', '==', postId), orderBy('createAt', 'desc'));

  const snapshot = await getDocs(q);

  return snapshot.docs.map(comment => {
    const commentData = comment.data();

    return { ...commentData, createAt: commentData.createAt.toMillis(), id: comment.id };
  });
};

const createComment = async ({ postId, commentInfo }) => {
  const { email, displayName } = getCurrentUser();
  const newComment = { ...commentInfo, email, name: displayName, createAt: serverTimestamp(), like: [], postId };

  const snapshot = await addDoc(collection(db, 'comments'), newComment);

  return snapshot.id;
};

const toggleLikeComment = async ({ commentId, checked, email }) => {
  await updateDoc(doc(db, 'comments', commentId), {
    like: checked ? arrayRemove(email) : arrayUnion(email),
  });
};

const editComment = async ({ commentId, content }) => {
  await updateDoc(doc(db, 'comments', commentId), { content });
};

const removeComment = async ({ commentId }) => {
  await deleteDoc(doc(db, 'comments', commentId));
  await removeRepliesByCommentId({ commentId });
};

const removeCommentsByPostId = async ({ postId }) => {
  const q = query(collection(db, 'comments'), where('postId', '==', postId));

  const commentsSnapshot = await getDocs(q);
  const ids = commentsSnapshot.docs.map(comment => comment.id);

  const batch = writeBatch(db);

  ids.forEach(id => {
    batch.delete(doc(db, 'comments', id));
  });

  await batch.commit();
};

export {
  getCommentCount,
  getCommentCounts,
  getComments,
  createComment,
  toggleLikeComment,
  editComment,
  removeComment,
  removeCommentsByPostId,
};
