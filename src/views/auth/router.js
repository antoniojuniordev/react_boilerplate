import { lazy, Suspense } from 'react';

import { BaseLayout } from 'core/layouts/Base';

const Login = lazy(() => import('./login'));

import { NoAuth } from 'core/routes/guards/noAuth';

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
