import AUTH from 'views/auth/i18n/pt-br';

export default {
  translations: {
    error500: 'Estamos passando por instabilidade, por favor tente novamente!',
    error401: 'Sessão expirada',
    error403: 'Permissão negada',
    success: 'Sucesso',
    successMsg: 'Operação realizada com sucesso',
    alert: 'Alert',
    alertMsg: 'Operação teve um alerta',
    home: {
      message: 'Olá Mundo!',
    },
    ...AUTH,
  },
};
