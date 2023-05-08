import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyle from './style/globalStyle';
import { store, persistor } from './store';
import { Email, Password, Shell } from './components';
import { Main, LogIn } from './pages';

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
        path: '/login',
        element: <LogIn />,
        children: [
          {
            index: true,
            element: <Email />,
          },
          {
            path: 'password',
            element: <Password />,
          },
        ],
      },
    ],
  },
]);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Global styles={globalStyle} />
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);

export default App;
