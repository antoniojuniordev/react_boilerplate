import React from 'react'
import { Switch, Route } from 'react-router-dom'

export default function renderRoutes (routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        const RouteComponent = route.routeComponent || Route

        return (
          <RouteComponent
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props =>
              route.render ? (
                route.render({ ...props, ...extraProps, route: route })
              ) : (<route.component {...props} {...extraProps} route={route} title={route.name} />)}
          />
        )
      })}
    </Switch>
  ) : null
}
