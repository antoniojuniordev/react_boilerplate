import { lazy, Suspense } from 'react';

import { DashboardLayout } from 'core/layouts/Dashboard';
import NoAuth from 'core/routes/guards/NoAuth';

const Dashboard = lazy(() => import('./panel'));

export default [
  {
    path: '/dashboard',
    element: <NoAuth component={DashboardLayout} />,
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
