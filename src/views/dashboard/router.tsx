import { DashboardLayout } from 'core/layouts/Dashboard';

import { PropsRouter } from 'core/routes/routes';
import { Panel } from './panel';

const dashboardRoutes: Array<PropsRouter> = [
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Panel />,
      },
    ],
  },
];
export default dashboardRoutes;
