import algoliasearch from 'algoliasearch';
import { createNullCache } from '@algolia/cache-common';
import { getCommentCounts } from './comments';

const client = algoliasearch(import.meta.env.VITE_ALGOLIA_APP_ID, import.meta.env.VITE_ALGOLIA_API_KEY, {
  requestsCache: createNullCache(),
  responsesCache: createNullCache(),
});

const initIndex = indexName => client.initIndex(indexName);

const clearSearchCache = async () => {
  await client.clearCache();
};

const getPopularPosts = async ({ tag }) => {
  const index = initIndex('sortByLike');

  const { hits } = await index.search(tag, {
    hitsPerPage: 10,
  });

  const commentsCounts = await getCommentCounts(hits);

  return hits.map(post => ({ ...post, commentCount: commentsCounts[post.objectID] }));
};

const getPosts = async ({ pageParam, tag = '' }) => {
  const index = initIndex('sortByCreateAt');

  const { hits, nbHits, nbPages } = await index.search(tag, {
    hitsPerPage: 10,

    page: pageParam,
  });

  const commentsCounts = await getCommentCounts(hits);

  return {
    posts: hits.map(post => ({ ...post, commentCount: commentsCounts[post.objectID] })),
    totalPage: nbPages,
    totalPosts: nbHits,
  };
};

export { getPosts, getPopularPosts, clearSearchCache };
