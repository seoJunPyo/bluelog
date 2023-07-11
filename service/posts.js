import { collection, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore';
import { db } from './app';
import { getCommentCount } from './comments';

const paginationQuery = ({ collection, where, orderBy, limit, page }) =>
  page ? query(collection, ...where, orderBy, startAfter(page), limit) : query(collection, ...where, orderBy, limit);

const manufacturePostsData = async snapshot => {
  const posts = await Promise.all(
    snapshot.docs.map(async doc => {
      const commentCount = await getCommentCount(doc.id);
      const postData = doc.data();

      return { ...postData, id: doc.id, createAt: postData.createAt.toMillis(), commentCount };
    })
  );

  return posts;
};

const getUserPosts = async ({ email, page, pageSize = 5, sort = 'desc' }) => {
  const q = paginationQuery({
    collection: collection(db, 'posts'),
    where: [where('email', '==', email)],
    orderBy: orderBy('createAt', sort),
    limit: limit(pageSize),
    page,
  });

  const snapshot = await getDocs(q);
  const posts = await manufacturePostsData(snapshot);

  return {
    posts,
    nextPage: snapshot.docs.at(-1),
  };
};

const getCategoryPosts = async ({ email, category, page, pageSize = 5, sort = 'desc' }) => {
  const q = paginationQuery({
    collection: collection(db, 'posts'),
    where: [where('email', '==', email), where('category', '==', category)],
    orderBy: orderBy('createAt', sort),
    limit: limit(pageSize),
    page,
  });

  const snapshot = await getDocs(q);
  const posts = await manufacturePostsData(snapshot);

  return {
    posts,
    nextPage: snapshot.docs.at(-1),
  };
};

export { getUserPosts, getCategoryPosts };
