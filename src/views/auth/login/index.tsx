import { Col, Row, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';
import { UserOutlined } from '@ant-design/icons';

import Input from 'components/form/input';
import InputPassword from 'components/form/inputPassword';
import Button from 'components/button';
import google from 'assets/images/icons/google.svg';

import { validationsLogin } from '../validates/validate';
import services from '../services';

export interface User {
  email: string;
  password: string;
}

export default function Login() {
  const { t } = useTranslation();
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

          <Col span={24}>
            <Input
              placeholder='Email'
              label='Email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
            ></Input>
          </Col>

          <Col span={24}>
            <InputPassword
              placeholder='Senha'
              label='Senha'
              name='password'
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
            Ou
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
        </Row>
      </form>
    </>
  );
}
