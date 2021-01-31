import { createMuiTheme, colors } from '@material-ui/core'

export default createMuiTheme({
  palette: {
    primary: { main: '#5a67d8', contrastText: colors.common.white },
    secondary: { main: '#53A1F9', contrastText: colors.common.white },
    redLi: { main: '#fc5861', contrastText: colors.common.white },
    drawerWidth: 240
  }
})
