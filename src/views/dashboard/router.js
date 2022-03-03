import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import { Auth } from 'routes/guards/auth';
import { DashboardLayout } from 'layouts/Dashboard';
import User from './user/indes';

const Dashboard = lazy(() => import('./panel'));

export default [
  {
    path: '/dashboard',
    element: Auth() ? <DashboardLayout /> : <Navigate to='/' />,
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
    path: '/user',
    element: Auth() ? <DashboardLayout /> : <Navigate to='/' />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<>...</>}>
            <User />
          </Suspense>
        ),
      },
    ],
  },
];
