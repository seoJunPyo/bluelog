import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  createReply,
  editReply,
  getReplies,
  getRepliesCount,
  removeReply,
  toggleLikeReply,
} from '../../service/replies';

const repliesApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'repliesApi',
  endpoints: builder => ({
    getRepliesCount: builder.query({
      queryFn: async ({ commentId }) => {
        const count = await getRepliesCount({ commentId });

        return { data: count };
      },
      providesTags: (_, __, args) => ['replies', args.commentId],
    }),

    getReplies: builder.query({
      queryFn: async ({ commentId }) => {
        const replies = await getReplies({ commentId });

        return { data: replies };
      },
      providesTags: (_, __, args) => ['replies', args.commentId],
    }),

    createReply: builder.mutation({
      queryFn: async ({ commentId, replyInfo }) => {
        await createReply({ commentId, replyInfo });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, args) => ['replies', args.commentId],
    }),

    editReply: builder.mutation({
      queryFn: async ({ replyId, content }) => {
        await editReply({ replyId, content });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, args) => ['replies', args.commentId],
    }),

    toggleLikeReply: builder.mutation({
      queryFn: async ({ replyId, checked, email }) => {
        await toggleLikeReply({ replyId, checked, email });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, args) => ['replies', args.commentId],
    }),

    removeReply: builder.mutation({
      queryFn: async ({ replyId }) => {
        await removeReply({ replyId });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, args) => ['replies', args.commentId],
    }),
  }),
});

export default repliesApi;
export const {
  useGetRepliesCountQuery,
  useGetRepliesQuery,
  useCreateReplyMutation,
  useEditReplyMutation,
  useToggleLikeReplyMutation,
  useRemoveReplyMutation,
} = repliesApi;
