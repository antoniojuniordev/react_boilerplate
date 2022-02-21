import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';

import { validationsLogin } from '../validates/validate';
import services from '../services';
import { useNavigate } from 'react-router-dom';
import Button from 'components/button';

export interface User {
  email: string;
  password: string;
}

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationsLogin,
    onSubmit,
  });

  async function onSubmit(payload: User) {
    const response = await services.login(payload, 'login');
    console.log(response);
    navigate('dashboard');
  }

  return <>login</>;
}
