import { createBrowserRouter } from 'react-router-dom';
import CourseForm from '../components/CourseForm/CourseForm';
import SingleCourse from '../components/SingleCourse/SingleCourse';
import DefaultLayout from '../layout/DefaultLayout';
import Course from '../pages/Course';
import Home from '../pages/Home';
import SignIn from '../pages/Login';
import NotFound from '../pages/NotFount';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/course',
        element: (
          <PrivateRoute>
            <Course />
          </PrivateRoute>
        ),
      },
      {
        path: '/course/:id',
        element: (
          <PrivateRoute>
            <SingleCourse />
          </PrivateRoute>
        ),
      },
      {
        path: '/course-update/:id',
        element: (
          <PrivateRoute>
            <CourseForm />
          </PrivateRoute>
        ),
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
