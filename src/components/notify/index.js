import { store } from 'react-notifications-component'
import PropTypes from 'prop-types'

function Notify ({ title, message, type }) {
  store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  })
}
Notify.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  message: PropTypes.string.isRequired
}
export default Notify
