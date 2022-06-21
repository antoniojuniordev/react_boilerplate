import { useTranslation } from 'react-i18next';

import Input from 'core/components/form/input';
import Button from 'core/components/button';

import { images } from 'core/assets';

import { useNavigate } from 'react-router-dom';

import yup from 'core/services/validates/yup';

export interface User {
  email: string;
  password: string;
}

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <h3>testssse</h3>
      <form></form>
    </>
  );
}
