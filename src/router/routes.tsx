import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import SignIn from '../pages/Login';
import NotFound from '../pages/NotFount';
import Register from '../pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <p>Home</p>,
      },
      {
        path: '/courses',
        element: <p>Courses</p>,
      },
      {
        path: '/login',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <Register />,
      },
      // Not-found route
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
