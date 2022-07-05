import { translate, TranslateProps } from 'core/i18n';
import toast from 'react-hot-toast';

const Notify = ({ translate }: TranslateProps) => ({
  success(message: string) {
    toast.success(translate(message));
  },
  error(message: string) {
    toast.error(translate(message));
  },
  info(message: string) {
    toast(translate(message), {
      icon: '❕',
    });
  },
});

export default Notify({ translate });
