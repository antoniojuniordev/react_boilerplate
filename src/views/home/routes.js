import Home from 'views/home/pages/home'
import RouteAuth from 'routes/routeAuth'
export default [
  {
    path: '/dashboard',
    exact: true,
    routeComponent: RouteAuth,
    name: 'Home',
    component: Home
  }
]
