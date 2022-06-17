import DASHBOARD from 'core/layouts/Dashboard/i18n/pt-br';
import PAGEDASHBOARD from 'views/dashboard/i18n/pt-br';
import AUTH from 'views/auth/i18n/pt-br';

export default {
  translations: {
    error500: 'Estamos passando por instabilidade, por favor tente novamente!',
    error401: 'Sessão expirada',
    error403: 'Permissão negada',
    success: 'Sucesso',
    successMsg: 'Operação realizada com sucesso',
    alert: 'Alerta',
    alertMsg: 'Operação teve um alerta',
    ...DASHBOARD,
    ...PAGEDASHBOARD,
    ...AUTH,
  },
};
