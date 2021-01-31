import NotFound from 'components/dashboard/notFound'

import RootPages from 'components/baseRoutes'
import AuthRoutes from '../views/auth/routes'
import HomeRoutes from 'views/home/routes'

export default [
  {
    component: RootPages,
    routes: [
      ...AuthRoutes,
      ...HomeRoutes,
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]
