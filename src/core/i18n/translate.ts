import { TFunction } from 'i18next';
import i18n from './i18n';

export interface TranslateProps {
  translate: (text: string) => string;
}

export function translate(text: string): string {
  return i18n.t(text);
}

export function changeLanguage(
  language: 'pt-BR' | 'en-US'
): Promise<TFunction> {
  return i18n.changeLanguage(language);
}

export function language(): string {
  return i18n.language;
}
