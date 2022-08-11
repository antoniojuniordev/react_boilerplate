import React from 'react';
import { NoFound } from 'core/layouts/NoFound';

import AuthRouter from '../../views/auth/router';
import DashboardRouter from '../../views/dashboard/router';

export interface PropsRouter {
  exact?: boolean;
  path: string;
  name?: string;
  props?: boolean;
  element: JSX.Element | React.FC | boolean;
  children?: Array<PropsRouter>;
}

const RouteRoot: Array<PropsRouter> = [
  ...AuthRouter,
  ...DashboardRouter,
  {
    path: '*',
    element: <NoFound />,
  },
];

export default RouteRoot;
