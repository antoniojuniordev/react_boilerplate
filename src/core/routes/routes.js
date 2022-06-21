import NotFound from 'core/layouts/NotFound';

// import DashboardRouter from 'views/dashboard/router';
import Auth from 'views/auth/router';

export default [
  // ...DashboardRouter,
  ...Auth,
  {
    path: '*',
    element: <NotFound />,
  },
];
