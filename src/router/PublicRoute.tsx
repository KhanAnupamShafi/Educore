import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useAuth();
  const location = useLocation();

  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PublicRoute;
