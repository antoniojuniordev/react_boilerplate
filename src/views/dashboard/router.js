import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import { Auth } from 'core/routes/guards/auth';
import { DashboardLayout } from 'core/layouts/Dashboard';

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
];
