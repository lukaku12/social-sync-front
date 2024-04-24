import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '@/components/Home.tsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to="/home"
            replace={true}
          />
        }
      />
      <Route
        path="/home"
        element={<Home />}
      />
    </Routes>
  );
};
