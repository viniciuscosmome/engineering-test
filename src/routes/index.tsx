import { createBrowserRouter } from 'react-router-dom';

import { AuthWrapper, AppWrapper } from '../components/wrappers';
import { FeedPage, LoginPage } from '../pages';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthWrapper />,
    children: [
      {
        path: '',
        element: <LoginPage />,
      }
    ]
  },
  {
    path: 'app',
    element: <AppWrapper />,
    children: [
      {
        path: '',
        element: <FeedPage />,
      }
    ]
  },
  {
    path: '*',
    element: 'Error page',
  }
]);

export default routes;
