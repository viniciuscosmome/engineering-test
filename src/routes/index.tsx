import { createBrowserRouter } from 'react-router-dom';

import { AuthWrapper } from '../components/wrappers';
import { AppPage, LoginPage } from '../pages';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthWrapper />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      }
    ]
  },
  {
    path: '/app',
    element: <AppPage />,
  },
  {
    path: '*',
    element: 'Error page',
  }
]);

export default routes;
