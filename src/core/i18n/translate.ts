import i18n from './i18n';

export interface TranslateProps {
  translate: (text: string) => string;
}

export function translate(text: string): string {
  return i18n.t(text);
}
