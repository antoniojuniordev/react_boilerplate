import { translate, changeLanguage, language } from 'core/i18n';

describe('i18n', () => {
  test('changeLanguage', () => {
    changeLanguage('pt-BR');
    expect(language() === 'pt-BR').toBeTruthy();
  });

  test('translate', () => {
    changeLanguage('pt-BR');
    expect(translate('Success') === 'Sucesso').toBeTruthy();
  });
});
