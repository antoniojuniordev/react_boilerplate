
import Notify from 'components/notify'
export default {
  errorBadRequest (errors) {
    errors.forEach(({ message }) => {
      Notify({
        title: 'Falha',
        message: message,
        type: 'danger'
      })
    })
  },
  errorUnauthorized (errors) {
    errors.forEach(({ message }) => {
      Notify({
        title: 'Falha ao solicitar acesso',
        message: message,
        type: 'danger'
      })
    })
  },
  errorServerInternal () {
    Notify({
      title: 'Falha',
      message: 'Estamos passando por instabilidade, por favor tente novamente!',
      type: 'danger'
    })
  },
  success (message) {
    Notify({
      title: 'Sucesso',
      message: message || 'Operação realizada com sucesso',
      type: 'success'
    })
  },
  error (message) {
    Notify({
      title: 'Alerta',
      message: message || 'Operação teve um alerta',
      type: 'danger'
    })
  }
}
