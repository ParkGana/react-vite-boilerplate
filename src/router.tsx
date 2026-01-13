import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import SignInPage from './pages/SignIn';
import AuthenticatedRoute from './routes/authenticatedRoute';

function Router() {
  return (
    <Routes>
      <Route element={<AuthenticatedRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="/signin" element={<SignInPage />} />

      {/* 등록되지 않은 경로로 접속을 시도할 경우, / 경로로 redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router;
