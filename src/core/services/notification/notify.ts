import { translate, TranslateProps } from 'core/i18n';
import toast from 'react-hot-toast';

export interface NotifyProps {
  notify: {
    success: (message: string) => void;
    error: (message: string) => void;
    info: (message: string) => void;
  };
}

const notify = ({ translate }: TranslateProps) => ({
  success(message: string) {
    if (toast) return toast.success(translate(message), { duration: 90000 });
    return message;
  },
  error(message: string) {
    return toast.error(translate(message), { duration: 90000 });
  },
  info(message: string) {
    return toast(translate(message), {
      icon: '❕',
    });
  },
});

export default notify({ translate });
