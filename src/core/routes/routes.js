import NoFound from 'core/layouts/NoFound';

import AuthRouter from '../../views/auth/router';
// import DashboardRouter from '../../views/dashboard/router';

export default [
  ...AuthRouter,
  // ...DashboardRouter,
  {
    path: '*',
    element: <NoFound />,
  },
];
