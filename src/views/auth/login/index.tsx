import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';

import { images } from 'core/assets';
import { translate } from 'core/i18n';
import Button from 'core/components/button';
import { Input, InputPassword, Form, yup } from 'core/components/form';

import services from '../services';
import { SignInProps } from '../model/login';

const validation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().max(8).required(),
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
          <Grid
            xs={12}
            item
            container
            justifyContent='center'
            sx={{ mt: 2, mb: 2 }}
          >
            <img
              className='mx-auto h-12 w-auto'
              src={images.logo.default}
              alt='Logo'
              height={80}
            />
          </Grid>
          <Grid xs={12} item>
            <Input
              required
              fullWidth
              label='Email'
              name={'email'}
              control={control}
            />
          </Grid>
          <Grid xs={12} item>
            <InputPassword
              fullWidth
              required
              name='password'
              label='Password'
              control={control}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }} container justifyContent='flex-end'>
            <Link href='forgot-password-email' variant='body2' underline='none'>
              {translate('Forgot password?')}
            </Link>
          </Grid>
          <Grid xs={12} item>
            <Button
              type='submit'
              id='sign-in'
              sx={{ mt: 3, mb: 2 }}
              name='Sign In'
            />
          </Grid>
          <Grid item xs={12} container justifyContent='center'>
            {translate('Or')}
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }} container justifyContent='center'>
            <Link href='/sign-up' variant='subtitle1' underline='none'>
              {translate('Sign Up')}
            </Link>
          </Grid>
        </Grid>
      )}
    />
  );
}
