import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';

// config
import { DEFAULT_PATH } from '../config';
import LoadingScreen from '../components/LoadingScreen';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/auth',
      element: <MainLayout />,
      children: [
        { path: 'login', element: <LoginPage /> },
        { path: 'register', element: <RegisterPage /> },
        { path: 'reset-password', element: <ResetPasswordPage /> },
        { path: 'new-password', element: <NewPasswordPage /> },
      ],
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        { path: 'group', element: <GroupPage /> },
        { path: 'settings', element: <Settings /> },

        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
const Settings = Loadable(lazy(() => import('../pages/dashboard/Settings')));
const GroupPage = Loadable(lazy(() => import('../pages/dashboard/Group')));

const RegisterPage = Loadable(lazy(() => import('../pages/auth/Register')));
const LoginPage = Loadable(lazy(() => import('../pages/auth/Login')));
const ResetPasswordPage = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
const NewPasswordPage = Loadable(lazy(() => import('../pages/auth/NewPassword')));

const Page404 = Loadable(lazy(() => import('../pages/Page404')));
