import DASHBOARD from 'core/layouts/Dashboard/i18n/en-us';
import PAGEDASHBOARD from 'views/dashboard/i18n/en-us';
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
    ...DASHBOARD,
    ...PAGEDASHBOARD,
    ...AUTH,
  },
};
