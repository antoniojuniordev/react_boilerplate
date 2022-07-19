import { Link, useNavigate } from 'react-router-dom';
import Button from 'core/components/button';
import { Grid } from '@mui/material';
import { Input, InputPassword, Form, yup } from 'core/components/form';

import services from '../services';
export interface SignInProps {
  email: string;
  password: string;
}

const validation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export default function Login() {
  const navigate = useNavigate();

  async function onSubmit(payload: SignInProps) {
    const response = await services.login(payload, 'login');
    console.log(response);
    navigate('dashboard');
  }

  return (
    <Form<SignInProps>
      defaultValues={{
        email: '',
        password: '',
      }}
      validations={validation}
      onSubmit={onSubmit}
      render={({ control }) => (
        <Grid container justifyContent='center'>
          <Grid xs={12} item>
            <Input
              required
              fullWidth
              label={'Email'}
              name={'email'}
              control={control}
            />
          </Grid>
          <Grid xs={12} item>
            <InputPassword
              fullWidth
              required
              name='password'
              label={'Senha'}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }} container justifyContent='flex-end'>
            {/* <Link href='forgot-password-email' variant='body2'>
              {t('Forgot password?')}
            </Link> */}
          </Grid>
          <Grid xs={12} item>
            <Button
              type='submit'
              id='sign-in'
              sx={{ mt: 3, mb: 2 }}
              name='Test'
            />
          </Grid>
          {/* <Grid item xs={12} container justifyContent='center'>
            {t('Or')}
          </Grid> */}
          <Grid item xs={12} sx={{ mt: 1 }} container justifyContent='center'>
            {/* <Link href='/sign-up' variant='subtitle1'>
              {t('Sign Up')}
            </Link> */}
          </Grid>
        </Grid>
      )}
    />
  );
}
