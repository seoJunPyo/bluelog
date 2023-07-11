import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import userReducer from './slices/userSlice';
import toastReducer from './slices/toastSlice';
import postImageReducer from './slices/postImageSlice';
import postsApi from './services/postsApi';
import postApi from './services/postApi';
import commentsApi from './services/commentsApi';
import repliesApi from './services/repliesApi';
import userApi from './services/userApi';
import tagApi from './services/tagsApi';

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [repliesApi.reducerPath]: repliesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [tagApi.reducerPath]: tagApi.reducer,
    images: postImageReducer,
    user: userReducer,
    toast: toastReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['postsApi/executeQuery/fulfilled', 'userApi/executeQuery/fulfilled'],
        ignoreState: ['postApi.queries'],
      },
    }),
    postsApi.middleware,
    postApi.middleware,
    commentsApi.middleware,
    repliesApi.middleware,
    userApi.middleware,
    tagApi.middleware,
  ],
});

setupListeners(store.dispatch);

export default store;
