import React from 'react'

import renderRoutes from 'routes/renderRoutes'
import usePrevious from './usePrevious'
import { PreviousPathnameContext } from './context'

const RootScreen = ({ route, location }) => {
  const { pathname } = location

  const previousPathname = usePrevious(pathname)

  return (
    <PreviousPathnameContext.Provider value={previousPathname}>

      <div>
        {renderRoutes(route.routes)}
      </div>

    </PreviousPathnameContext.Provider>
  )
}

export default RootScreen
