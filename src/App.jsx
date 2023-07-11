import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global } from '@emotion/react';
import store from './store';
import globalStyle from './style/globalStyle';
import textEditorStyle from './style/textEditorStyle';
import { Shell, LogInEmail, LogInPassword, SignUpEmail, SignUpPassword, SignUpNickName, TagSelect } from './components';
import { Main, LogIn, SignUp, Post, SearchedPosts, AllPosts, EditPost, CreatePost, MyBlog, Category } from './pages';
import AuthGuard from './components/Guard/AuthGuard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'login',

        element: <LogIn />,
        children: [
          {
            index: true,
            element: <LogInEmail />,
          },
          {
            path: 'password',
            element: <LogInPassword />,
          },
        ],
      },
      {
        path: 'signup',
        element: <SignUp />,
        children: [
          {
            index: true,
            element: <SignUpEmail />,
          },
          {
            path: 'password',
            element: <SignUpPassword />,
          },
          {
            path: 'nickname',
            element: <SignUpNickName />,
          },
          {
            path: 'tagselect',
            element: <TagSelect />,
          },
        ],
      },
      {
        path: 'my',
        element: <AuthGuard />,
        children: [
          { index: true, element: <MyBlog /> },
          {
            path: 'savedPosts',
          },
          {
            path: 'editProfile',
          },
        ],
      },
      {
        path: 'category/:email/:category',
        element: <Category />,
      },
      {
        path: 'createpost',
        element: <AuthGuard element={<CreatePost />} />,
      },
      {
        path: 'editpost/:postId',
        element: <EditPost />,
      },
      {
        path: 'posts/all/:page',
        element: <AllPosts />,
      },
      {
        path: 'posts/search/:keyword/:page',
        element: <SearchedPosts />,
      },
      {
        path: 'post/:postId',
        element: <Post />,
        errorElement: <div>게시물이 존재하지 않거나 삭제되었습니다.</div>,
      },
    ],
  },
]);

const App = () => (
  <Provider store={store}>
    <Global styles={globalStyle} />
    <Global styles={textEditorStyle} />
    <RouterProvider router={router} />
  </Provider>
);

export default App;
