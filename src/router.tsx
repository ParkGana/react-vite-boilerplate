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

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router;
