import services from 'services/api';

import { User } from '../login';

export default {
  async login({ email, password }: User, reference: string) {
    try {
      return await services.create(
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
