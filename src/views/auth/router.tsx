import { BaseLayout } from 'core/layouts/Base';

import { Login } from './login';

import { NoAuth } from 'core/routes/guards/noAuth';
import { PropsRouter } from 'core/routes/routes';

const AuthRouter: Array<PropsRouter> = [
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

export default AuthRouter;
