import * as yup from 'yup';
import { translate } from 'core/i18n';

yup.setLocale({
  mixed: {
    required: translate('Fill this field to continue'),
  },
  string: {
    email: translate('Fill in the field with a valid email'),
    min: 'Preencha campo por completo',
    max: 'Preencha campo por completo',
    matches: 'Preencha com um ${label} válido.',
  },
  number: {
    integer: 'Preencha com números inteiros',
    positive: 'Preencha com números positivos',
  },
});
export default yup;
