import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  createComment,
  editComment,
  getCommentCount,
  getComments,
  removeComment,
  toggleLikeComment,
} from '../../service/comments';

const commentsApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'commentsApi',
  endpoints: builder => ({
    getComments: builder.query({
      queryFn: async ({ postId }) => {
        const comments = await getComments(postId);

        return { data: comments };
      },
      providesTags: (_, __, args) => ['comments', args.postId],
    }),

    getCommentCount: builder.query({
      queryFn: async ({ postId }) => {
        const count = await getCommentCount(postId);

        return { data: count };
      },
      providesTags: (_, __, args) => ['comments', args.postId],
    }),

    createComment: builder.mutation({
      queryFn: async ({ postId, commentInfo }) => {
        const commentId = await createComment({ postId, commentInfo });

        return { data: commentId };
      },
      invalidatesTags: (_, __, args) => ['comments', args.postId],
    }),

    toggleLikeComment: builder.mutation({
      queryFn: async ({ commentId, checked, email }) => {
        await toggleLikeComment({ commentId, checked, email });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, args) => ['comments', args.postId],
    }),

    editComment: builder.mutation({
      queryFn: async ({ commentId, content }) => {
        await editComment({ commentId, content });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, args) => ['comments', args.postId],
    }),

    removeComment: builder.mutation({
      queryFn: async ({ commentId }) => {
        await removeComment({ commentId });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, args) => ['comments', args.postId],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useLazyGetCommentsQuery,
  useGetCommentCountQuery,
  useCreateCommentMutation,
  useToggleLikeCommentMutation,
  useEditCommentMutation,
  useRemoveCommentMutation,
} = commentsApi;
export default commentsApi;
