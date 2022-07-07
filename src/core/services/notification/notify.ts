import { translate, TranslateProps } from 'core/i18n';
import toast from 'react-hot-toast';

const Notify = ({ translate }: TranslateProps) => ({
  success(message: string) {
    return toast.success(translate(message), { duration: 90000 });
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

export default Notify({ translate });
