import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyle from './style/globalStyle';
import store from './store';
import { Shell } from './components';
import Main from './pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
]);

const App = () => (
  <Provider store={store}>
    <Global styles={globalStyle} />
    <RouterProvider router={router} />
  </Provider>
);

export default App;
