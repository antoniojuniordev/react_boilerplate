import { Col, Row, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import Input from 'components/form/input';
import InputPassword from 'components/form/inputPassword';
import Button from 'components/button';
import google from 'assets/images/icons/google.svg';

import { validationsLogin } from '../../validates/validate';
import services from '../../services';
import { useNavigate } from 'react-router-dom';
import { setSession } from 'services/storage';

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
    if (response) {
      await setSession(response.data.token);
      navigate('/dashboard');
    }
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Row gutter={[0, 8]} justify='end'>
          <Col span={24}>
            <Row justify='center'>
              <Avatar size={70} icon={<UserOutlined />} />
            </Row>
          </Col>

          <Col span={24} className='mt-2'>
            <Input
              tabIndex='1'
              name='email'
              placeholder='Email'
              prefix={<UserOutlined />}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
            ></Input>
          </Col>

          <Col span={24} className='mt-1'>
            <InputPassword
              tabIndex='2'
              name='password'
              placeholder='Senha'
              prefix={<LockOutlined />}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
            ></InputPassword>
          </Col>

          <Col span={24} className='text-end'>
            <a href='/'>Esqueceu sua senha?</a>
          </Col>

          <Col span={24} className='mt-2'>
            <Button block type='primary' htmlType='submit' id='login'>
              {t('auth.sing')}
            </Button>
          </Col>

          <Col span={24} className='text-center mt-1'>
            <a href='/'>
              <img
                src={google}
                className='mr-10'
                alt='Google'
                height='40'
                width='40'
              />
            </a>
          </Col>

          <Col span={24} className='text-center mt-1'>
            Ou
          </Col>

          <Col span={24} className='text-center'>
            <a href='/'>Cadastre-se</a>
          </Col>
        </Row>
      </form>
    </>
  );
}
