import * as yup from 'yup';
import { translate } from 'core/i18n';

yup.setLocale({
  mixed: {
    required: translate('Fill this field to continue'),
  },
  string: {
    email: translate('Fill in the field with a valid email'),
    min:
      translate('Please fill in at least') +
      ' ${min} ' +
      translate('characters'),
    max:
      translate('Please fill a maximum of') +
      ' ${max} ' +
      translate('characters'),
  },
  number: {
    integer: translate('Fill in whole numbers'),
    positive: translate('Fill with positive numbers'),
  },
});
export default yup;
