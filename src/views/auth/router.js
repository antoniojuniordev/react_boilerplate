import { lazy, Suspense } from 'react';

import { BaseLayout } from 'layouts/Base';

const Login = lazy(() => import('./pages/login'));

import { NoAuth } from 'routes/guards/noAuth';

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
];
