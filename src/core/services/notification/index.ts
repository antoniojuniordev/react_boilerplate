import i18n from 'core/i18n';

import Notify from './notification';

export default {
  success(message: string) {
    Notify({
      title: i18n.t('success'),
      message: i18n.t(message) || i18n.t('successMsg'),
      type: 'success',
    });
  },
  error(message: string) {
    Notify({
      title: i18n.t('alert'),
      message: i18n.t(message) || i18n.t('alertMsg'),
      type: 'error',
    });
  },
};
