import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import Input from 'core/components/form/input';
import Button from 'core/components/button';
import google from 'core/assets/icons/google.svg';
import logo from 'core/assets/images/logo.svg';

import { useNavigate } from 'react-router-dom';
import yup from 'core/services/validates/yup';

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
    validationSchema: yup.object().shape({
      email: yup.string(),
      password: yup.string(),
    }),
    onSubmit,
  });

  async function onSubmit(payload: User) {
    navigate('/dashboard');
    // const response = await services.login(payload, 'login');
    // if (response) {
    //   await setSession(response.data.token);
    //   navigate('/dashboard');
    // }
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Row gutter={[0, 8]} justify='end'>
          <Col span={24}>
            <Row justify='center'>
              <img
                src={logo}
                alt='logo'
                className='logo'
                height='100'
                width='100'
              />
            </Row>
          </Col>

          <Col span={24} className='mt-2'>
            <Input
              name='email'
              placeholder={t('Email')}
              prefix={<UserOutlined />}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
            ></Input>
          </Col>

          <Col span={24} className='mt-1'>
            <Input
              name='password'
              placeholder={t('Password')}
              prefix={<LockOutlined />}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
            ></Input>
          </Col>

          <Col span={24} className='text-end'>
            <a href='/'>{t('Forgot your password?')}</a>
          </Col>

          <Col span={24} className='mt-2'>
            <Button block type='primary' htmlType='submit' id='login'>
              {t('Sing in')}
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
            {t('Or')}
          </Col>

          <Col span={24} className='text-center'>
            <a href='/'>{t('Register')}</a>
          </Col>
        </Row>
      </form>
    </>
  );
}
