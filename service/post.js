import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { db } from './app';
import { createTags, updateTagCount } from './tags';
import { getCurrentUser } from './auth';
import { removeCommentsByPostId } from './comments';
import { setCategory } from './users';

const formatRefData = ref => {
  const data = ref.data();
  const createAt = Number(data?.createAt?.toDate());
  const updateAt = Number(data?.createAt?.toDate());

  return { ...data, createAt, updateAt, id: ref.id };
};

const getPost = async postId => {
  const postRef = await getDoc(doc(db, 'posts', postId));

  return formatRefData(postRef);
};

const createPost = async postInfo => {
  const { email, displayName } = getCurrentUser();

  const postRef = await addDoc(collection(db, 'posts'), {
    ...postInfo,
    email,
    name: displayName,
    like: [],
    comments: [],
    createAt: serverTimestamp(),
  });

  await Promise.all([
    createTags(postInfo.tagList),
    updateTagCount(postInfo.tagList),
    setCategory({ email, category: postInfo.category }),
  ]);

  return postRef.id;
};

const editPost = async ({ email, postId, postInfo }) => {
  const { tagList, category } = postInfo;

  await Promise.all([
    updateDoc(doc(db, 'posts', postId), postInfo),
    createTags(tagList),
    updateTagCount(tagList),
    setCategory({ email, category }),
  ]);
};

const removePost = async postId => {
  await deleteDoc(doc(db, 'posts', postId));
  await removeCommentsByPostId({ postId });
};

const removePostByCategory = async ({ email, category }) => {
  const q = query(collection(db, 'posts'), where('email', '==', email), where('category', '==', category));
  const categoryDocs = await getDocs(q);

  const batch = writeBatch(db);

  categoryDocs.docs.forEach(post => batch.delete(doc(db, 'posts', post.id)));

  await batch.commit();
};

const toggleLikePost = async ({ postId, checked, email }) => {
  await updateDoc(doc(db, 'posts', postId), {
    like: checked ? arrayRemove(email) : arrayUnion(email),
  });
};

const toggleSavePost = async ({ email, checked, postId }) => {
  const userRef = doc(db, 'users', email);

  await updateDoc(userRef, { savedPosts: checked ? arrayRemove(postId) : arrayUnion(postId) });
};

export { getPost, createPost, removePost, editPost, toggleLikePost, removePostByCategory, toggleSavePost };
