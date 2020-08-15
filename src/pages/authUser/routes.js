import React from 'react'
import { Route } from 'react-router-dom'

import Login from './Login'
import NewUser from './NewUser'

const UserRoutes = () => (
  <>
    <Route exact path='/' component={Login} />
    <Route path='/register' component={NewUser} />
  </>
)

export default UserRoutes
