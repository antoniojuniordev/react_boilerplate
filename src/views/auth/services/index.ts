import { api } from 'core/services/api';

import { SignInProps } from '../model/login';

export default {
  async login({ email, password }: SignInProps, id: string) {
    try {
      return await api.post({
        url: '/authenticate',
        data: { email, password },
        msgSuccess: 'Login realizado com sucesso',
        id: id,
      });
    } catch (error) {
      return false;
    }
  },
};
