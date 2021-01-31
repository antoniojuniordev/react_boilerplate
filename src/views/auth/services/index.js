import services from 'api'

export default {
  async login ({ email, password }, reference) {
    try {
      return await services.create('/authenticate', { email, password }, 'Login realizado com sucesso', reference)
    } catch (error) {
      return false
    }
  },
  async resetPassword ({ email }, reference) {
    try {
      return await services.create('/reset_password', { email }, 'Email enviado com sucesso', reference)
    } catch (error) {
      return false
    }
  },
  async confirmResetPassword (code, reference) {
    try {
      return await services.get(`reset_password/${code}/validate`, reference)
    } catch (error) {
      return false
    }
  },

  async sendNewPassword ({ code, passwordOne, passwordTwo }, reference) {
    try {
      return await services.update(
        `reset_password/${code}`,
        { passwordOne, passwordTwo },
        'Senha atualizada com sucesso',
        reference
      )
    } catch (error) {
      return false
    }
  }
}
