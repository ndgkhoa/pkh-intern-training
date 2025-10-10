import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from '@/layouts/MainLayout';
// import AdminLayout from '@/layouts/AdminLayout';
import Loading from '@/components/Loading';

// Lazy load pages
const HomePage = lazy(() => import('@/features/home/pages/HomePage'));
const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'));
// const RegisterPage = lazy(() => import('@/features/auth/pages/RegisterPage'));
// const DashboardPage = lazy(() => import('@/features/admin/pages/DashboardPage'));
const NotFoundPage = lazy(() => import('@/features/common/pages/NotFoundPage'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading fullscreen message="Đang tải dữ liệu..." />}>
        <Routes>
          {/* Public routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
          </Route>

          {/* Protected routes 
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
          </Route>*/}

          {/* 404 fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
