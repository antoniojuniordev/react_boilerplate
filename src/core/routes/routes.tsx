import NotFound from 'core/layouts/NotFound'

import AuthRouter from '../../views/auth/router'

const Routes = [
  ...AuthRouter,
  {
    path: '*',
    element: <NotFound />
  }
]

export default Routes
