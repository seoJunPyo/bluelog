import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { getPost, removePost, editPost, toggleLikePost } from '../../service/post';

const postApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'postApi',
  tagTypes: ['post'],
  refetchOnFocus: true,
  endpoints: builder => ({
    getPost: builder.query({
      queryFn: async ({ postId }) => {
        const data = await getPost(postId);

        return { data };
      },
      providesTags: (_, __, arg) => ['post', arg.postId],
    }),

    removePost: builder.mutation({
      queryFn: async ({ postId }) => {
        await removePost(postId);

        return { data: 'ok' };
      },
      invalidatesTags: ['popularPosts', 'posts', 'category'],
    }),

    editPost: builder.mutation({
      queryFn: async ({ email, postId, postInfo }) => {
        await editPost({ email, postId, postInfo });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, arg) => ['popularPosts', 'posts', 'post', 'category', arg.postId],
    }),

    toggleLike: builder.mutation({
      queryFn: async ({ postId, checked, email }) => {
        await toggleLikePost({ postId, checked, email });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, arg) => ['popularPosts', 'posts', 'post', 'category', arg.postId],
    }),
  }),
});

export const { useGetPostQuery, useRemovePostMutation, useEditPostMutation, useToggleLikeMutation } = postApi;
export default postApi;
