import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';

import { validationsLogin } from '../validates/validate';
import services from '../services';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'components/button';
import Input from 'components/form/input';
import { Box, Grid } from '@mui/material';

export interface User {
  email: string;
  password: string;
}

export default function Login() {
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

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid>
          <Grid item xs={11}>
            <Input
              name='email'
              type='email'
              label='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={11}>
            <Input
              name='password'
              label='Password'
              type='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={11}>
            {/* <Grid container direction='row' justify='flex-end'>
              <Grid item>
                <Link style={{ cursor: 'pointer' }} color='inherit'>
                  <FaLock className='mr-1' /> Esqueceu sua Senhasss?
                </Link>
              </Grid>
            </Grid> */}
          </Grid>
          <Grid item xs={11}>
            <Box marginTop={3}>
              <Button name='Entrar' type='submit' id='login' />
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
