import NoFound from 'core/layouts/NoFound';

import DashboardRouter from 'views/dashboard/router';
import Auth from 'views/auth/router';

export default [
  ...DashboardRouter,
  ...Auth,
  {
    path: '*',
    element: <NoFound />,
  },
];
