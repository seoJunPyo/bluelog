import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { getPopularPosts, getPosts } from '../../service/algolia';
import { getCategoryPosts, getUserPosts } from '../../service/posts';

const postsApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'postsApi',
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  endpoints: builder => ({
    getPosts: builder.query({
      queryFn: async variables => {
        const { posts, totalPage, totalPosts } = await getPosts({ pageParam: variables.page, tag: variables?.tag });

        return { data: { posts, totalPage, totalPosts } };
      },
      providesTags: ['posts'],
      keepUnusedDataFor: 3,
    }),
    getPopularPosts: builder.query({
      queryFn: async variables => {
        const posts = await getPopularPosts({ tag: variables?.tag });

        return { data: posts };
      },
      providesTags: ['popularPosts'],
      keepUnusedDataFor: 3,
    }),
    getUserPosts: builder.query({
      queryFn: async ({ email, page = undefined, pageSize, sort }) => {
        const posts = await getUserPosts({ email, page, pageSize, sort });

        return { data: posts };
      },
      providesTags: (_, __, arg) => ['userPosts', arg.page ?? 'firstPage'],
      keepUnusedDataFor: 3,
    }),

    getCategoryPost: builder.query({
      queryFn: async ({ email, category, page = undefined, pageSize, sort }) => {
        const posts = await getCategoryPosts({ email, category, page, pageSize, sort });

        return { data: posts };
      },
      providesTags: (_, __, arg) => ['categoryPost', arg.category, arg.page ?? 'firstPage'],
      keepUnusedDataFor: 3,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPopularPostsQuery,
  useGetUserPostsQuery,
  useLazyGetUserPostsQuery,
  useGetCategoryPostQuery,
} = postsApi;
export default postsApi;
