import Routers from 'core/routes';
import theme, { colorsLight, colorsDark } from 'core/styles/theme';
import { GlobalStyle } from 'core/styles/styles';

import { ThemeProvider } from 'styled-components';

export default function App() {
  const isDarkTheme = false;
  return (
    <ThemeProvider
      theme={
        isDarkTheme ? { ...theme, ...colorsLight } : { ...theme, ...colorsDark }
      }
    >
      <GlobalStyle />
      <Routers />
    </ThemeProvider>
  );
}
