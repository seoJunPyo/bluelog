import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  changeCategoryName,
  getCategoryInfo,
  getUser,
  getUserCategoryList,
  getUserCategoryNames,
  removeCategory,
  updateCategory,
  updateUserInfo,
} from '../../service/users';
import { toggleSavePost } from '../../service/post';

const userApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'userApi',
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  endpoints: builder => ({
    getUser: builder.query({
      queryFn: async ({ email }) => {
        const user = await getUser({ email });

        return { data: user };
      },
      providesTags: (_, __, args) => ['user', args.email],
    }),
    getCategoryNames: builder.query({
      queryFn: async ({ email }) => {
        const categoryNames = await getUserCategoryNames({ email });

        return { data: categoryNames };
      },
      providesTags: (_, __, arg) => ['category', arg.email],
    }),
    getCategoryList: builder.query({
      queryFn: async ({ email }) => {
        const categoryList = await getUserCategoryList({ email });

        return { data: categoryList };
      },
      providesTags: (_, __, arg) => ['category', arg.email],
    }),
    getCategoryInfo: builder.query({
      queryFn: async ({ email, category }) => {
        const categoryInfo = await getCategoryInfo({ email, category });

        return { data: categoryInfo };
      },
      providesTags: (_, __, arg) => ['category', arg.email, arg.category],
    }),
    updateUserInfo: builder.mutation({
      queryFn: async ({ email, userInfo }) => {
        await updateUserInfo({ email, userInfo });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, args) => ['user', args.email],
    }),
    updateCategoryInfo: builder.mutation({
      queryFn: async ({ email, category, categoryInfo }) => {
        await updateCategory({ email, category, categoryInfo });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, arg) => ['category', arg.email, arg.category],
    }),
    changeCategoryName: builder.mutation({
      queryFn: async ({ email, category, categoryName }) => {
        await changeCategoryName({ email, category, categoryName });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, arg) => ['category', arg.email, arg.category],
    }),
    removeCategory: builder.mutation({
      queryFn: async ({ email, category }) => {
        await removeCategory({ email, category });

        return { date: 'ok' };
      },
      invalidatesTags: (_, __, arg) => ['category', 'userPosts', 'popularPosts', 'posts', arg.email, arg.category],
    }),
    toggleSave: builder.mutation({
      queryFn: async ({ email, checked, postId }) => {
        await toggleSavePost({ email, checked, postId });

        return { data: 'ok' };
      },
      invalidatesTags: (_, __, arg) => ['user', arg.email],
    }),
  }),
});

export default userApi;
export const {
  useGetUserQuery,
  useGetCategoryListQuery,
  useGetCategoryNamesQuery,
  useGetCategoryInfoQuery,
  useUpdateCategoryInfoMutation,
  useChangeCategoryNameMutation,
  useRemoveCategoryMutation,
  useToggleSaveMutation,
  useUpdateUserInfoMutation,
} = userApi;
