import React, { useMemo } from 'react';
import { PoppinsRegular } from 'core/assets/fonts';

import { CssBaseline } from '@mui/material';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import palette from 'core/styles/pallete';
import { ptBR } from '@mui/material/locale';

interface PropsThemeConfig {
  children: JSX.Element;
}
export default function ThemeConfig({ children }: PropsThemeConfig) {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography: {
        fontFamily: 'Poppins, sans-serif',
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Poppins, sans-serif';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: "url(${PoppinsRegular}) format('truetype')";
              unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
            }
          `,
        },
      },
    }),
    []
  );

  const theme = createTheme(themeOptions, ptBR);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
