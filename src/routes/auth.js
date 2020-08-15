import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const token = true

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (token ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))}
  />
)

export default AuthRoute
