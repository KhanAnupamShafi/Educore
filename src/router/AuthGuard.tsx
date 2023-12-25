import { Navigate, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export const AuthGuardedRoute = ({
  path,
  element,
}: {
  path: string;
  element: React.ReactNode;
}) => {
  if (useAuth()) {
    return <Route path={path} element={element} />;
  } else {
    // Redirect to the sign-in page if not authenticated
    return <Navigate to="/login" />;
  }
};
