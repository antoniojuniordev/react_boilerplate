import 'styled-components';
import theme, { colorsLight } from './theme';

declare module 'styled-components' {
  type ThemeColorsType = typeof colorsLight;
  type ThemeType = typeof theme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType, ThemeColorsType {}
}
