import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from '@/views/not-authenticated/SignIn.tsx';
import SignUp from '@/views/not-authenticated/SignUp.tsx';
import ForgotPassword from '@/views/not-authenticated/ForgotPassword.tsx';
import ResetPassword from '@/views/not-authenticated/ResetPassword.tsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to="/login"
            replace={true}
          />
        }
      />

      <Route
        path="/login"
        element={<SignIn />}
      />

      <Route
        path="/register"
        element={<SignUp />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />
    </Routes>
  );
};
