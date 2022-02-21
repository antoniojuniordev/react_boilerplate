import { Store } from 'react-notifications-component';

interface Props {
  title: string;
  message: string;
  type: 'success' | 'danger' | 'default' | 'warning' | 'info';
}

function Notify({ title, message, type }: Props) {
  Store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
}
export default Notify;
