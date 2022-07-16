import { BaseLayout } from 'core/layouts/Base';

import Login from './login';

import { NoAuth } from 'core/routes/guards/noAuth';

export default [
  {
    path: '/',
    element: NoAuth() && <BaseLayout />,
    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
];
