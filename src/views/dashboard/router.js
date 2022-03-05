import { lazy, Suspense } from 'react';

import { DashboardLayout } from 'layouts/Dashboard';
import User from './user/indes';
import Auth from 'routes/guards/Auth';

const Dashboard = lazy(() => import('./panel'));

export default [
  {
    path: '/dashboard',
    element: <Auth component={DashboardLayout} />,
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
    element: <DashboardLayout />,
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
