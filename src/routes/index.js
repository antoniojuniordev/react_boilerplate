import React from 'react'
import { createBrowserHistory } from 'history'
import { BrowserRouter, Switch } from 'react-router-dom'

import UserRoutes from '../pages/authUser/routes'

const history = createBrowserHistory()

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <UserRoutes />
    </Switch>
  </BrowserRouter>
)

export default Routes
