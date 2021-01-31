import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes/index'

import renderRoutes from './routes/renderRoutes'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { SessionProvider } from 'components/baseRoutes/context/SessionContext'
import { LoadingProvider } from 'components/load/context'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import theme from './theme'

function App () {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <SessionProvider>
          <LoadingProvider>
            <ReactNotification />
            <BrowserRouter>
              {renderRoutes(routes)}
            </BrowserRouter>
          </LoadingProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}

export default App
