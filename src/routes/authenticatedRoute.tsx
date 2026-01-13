import { Navigate, Outlet } from 'react-router-dom';

const AuthenticatedRoute = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) return <Navigate to="/signin" replace />;

  return <Outlet />;
};

export default AuthenticatedRoute;
