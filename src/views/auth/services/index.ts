import services from 'core/services/api';

import { User } from '../pages/login';

export default {
  async login({ email, password }: User, reference: string) {
    try {
      return await services.post(
        '/authenticate',
        { email, password },
        'Login realizado com sucesso',
        reference
      );
    } catch (error) {
      return false;
    }
  },
};
