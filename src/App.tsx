import { ThemeProvider } from 'styled-components'

import theme from 'core/styles/theme'
import { Notification } from 'core/services/notification'
import { GlobalStyle } from 'core/styles/styles'
import Routers from 'core/routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Notification />
      <GlobalStyle />
      <Routers />
    </ThemeProvider>
  )
}
