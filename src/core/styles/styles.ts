import { createGlobalStyle, css } from 'styled-components'

import { Poppins300, Poppins600, PoppinsRegular } from 'core/assets/fonts'
import margin from './margin'
import padding from './padding'
import text from './text'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url(${Poppins300}) format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url(${PoppinsRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url(${Poppins600}) format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: ${theme.font.normal};
    }
  `}

  ${margin}

  ${padding}
  
  ${text}
`
