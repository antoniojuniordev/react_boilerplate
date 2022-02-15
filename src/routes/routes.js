import { lazy, Suspense } from 'react';

import { BaseLayout } from 'layouts/Base';
import { DashboardLayout } from 'layouts/Dashboard';

const Login = lazy(() => import('../views/Login'));
const Dashboard = lazy(() => import('../views/Dashboard'));

import { NoAuth } from 'routes/guards/noAuth';
import { Auth } from 'routes/guards/auth';
import { Navigate } from 'react-router-dom';
import NoFound from 'layouts/NoFound';

export default [
  {
    path: '/',
    element: NoAuth() && <BaseLayout />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<>...</>}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: !Auth() ? <DashboardLayout /> : <Navigate to='/' />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<>...</>}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NoFound />,
  },
];
