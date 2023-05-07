import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyle from './style/globalStyle';
import store from './store';
import { Shell } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    children: [
      {
        index: true,
        element: <div>BLUE ARCHIVE</div>,
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
