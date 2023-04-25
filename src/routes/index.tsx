import { createBrowserRouter, Navigate } from 'react-router-dom';

import { AuthWrapper, AppWrapper } from '../components/wrappers';
import { CheckSession, ProtectedRoute, FeedPage, LoginPage, ErrorPage } from '../pages';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <CheckSession />,
    children: [
      {
        path: '',
        element: <AuthWrapper />,
        children: [
          {
            path: '',
            element: <LoginPage />,
          }
        ]
      }
    ]
  },
  {
    path: '/feed',
    element: <ProtectedRoute />,
    children: [
      {
        path: '',
        element: <AppWrapper />,
        children: [
          {
            path: '',
            element: <FeedPage />,
          }
        ]
      }
    ]
  },
  {
    path: '/e/:code',
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to={'/e/404'} />
  }
]);

export default routes;
