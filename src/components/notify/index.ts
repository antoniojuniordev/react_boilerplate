import { notification } from 'antd';

interface Props {
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

function Notify({ title, message, type }: Props) {
  notification[type]({
    message: title,
    description: message,
  });
}
export default Notify;
