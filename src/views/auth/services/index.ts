import { api } from 'core/services/api';

import { User } from '../login';

export default {
  async login({ email, password }: User, id: string) {
    try {
      return await api.post({
        url: '/authenticate',
        send: { email, password },
        msgSuccess: 'Login realizado com sucesso',
        id: id,
      });
    } catch (error) {
      return false;
    }
  },
};
