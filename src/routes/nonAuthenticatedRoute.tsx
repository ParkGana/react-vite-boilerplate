import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/providers/authProvider';

const NonAuthenticatedRoute = () => {
  const { isAuthenticated } = useAuth();

  // 로그인 되어있는 경우, / 경로로 redirect
  if (isAuthenticated) return <Navigate to="/" replace />;

  // 로그인 되어있지 않은 경우, 원하는 경로로 이동
  return <Outlet />;
};

export default NonAuthenticatedRoute;
