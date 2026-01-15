import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import SignInPage from './pages/SignIn';
import AuthenticatedRoute from './routes/authenticatedRoute';
import NonAuthenticatedRoute from './routes/nonAuthenticatedRoute';

const Router = () => {
  return (
    <Routes>
      {/* 로그인 되어있지 않은 경우에만 접속 가능한 경로들 */}
      <Route element={<NonAuthenticatedRoute />}>
        <Route path="/signin" element={<SignInPage />} />
      </Route>

      {/* 로그인 되어있는 경우에만 접속 가능한 경로들 */}
      <Route element={<AuthenticatedRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* 등록되지 않은 경로로 접속을 시도할 경우, / 경로로 redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
