import Login from './pages/login'
import ForgotPassword from './pages/forgotPassword'
import RouteIsAuth from 'routes/routeIsAuth'
import ForgotPasswordCode from './pages/forgotPasswordCode'
export default [
  {
    path: '/',
    exact: true,
    routeComponent: RouteIsAuth,
    component: Login
  },
  {
    path: '/forgot-password',
    routeComponent: RouteIsAuth,
    component: ForgotPassword
  },
  {
    path: '/forgot-password-code/:code',
    routeComponent: RouteIsAuth,
    component: ForgotPasswordCode
  }
]
