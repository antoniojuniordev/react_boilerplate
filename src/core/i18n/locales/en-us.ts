import AUTH from 'views/auth/i18n/en-us';

export default {
  translations: {
    error500: 'We are experiencing instability, please try again!',
    error401: 'Session expired',
    error403: 'Permission denied',
    success: 'Success',
    successMsg: 'Operation performed successfully',
    alert: 'Alert',
    alertMsg: 'Operation had an alert',
    ...AUTH,
  },
};
