import React from 'react'
import { createBrowserHistory } from 'history'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../pages/authUser/Login'
import NewUser from '../pages/authUser/NewUser'

const history = createBrowserHistory()

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/register' component={NewUser} />
    </Switch>
  </BrowserRouter>
)

export default Routes
