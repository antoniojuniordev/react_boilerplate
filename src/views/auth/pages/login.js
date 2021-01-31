import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { Grid, Link, Box } from '@material-ui/core'
import { FaLock } from 'react-icons/fa'

import Input from 'components/form/input'
import Btn from 'components/form/button'
import Accounts from 'components/accounts'
import services from 'views/auth/services'
import { session } from 'api/helpers/storage/localStorage'
import { validationsLogin } from 'views/auth/validations'

const initialValues = {
  email: '',
  password: ''
}

function Login ({ history }) {
  const formik = useFormik({
    initialValues,
    validationSchema: validationsLogin,
    onSubmit
  })

  async function onSubmit (payload) {
    const response = await services.login(payload, 'login')
    if (response) {
      session({
        token: response.data.token,
        sessionPayload: {
          name: response.data.user.name,
          email: response.data.user.email
        }
      })
      history.push('/dashboard')
    }
  }

  return (
    <Accounts history={history}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container justify='center'>
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
          <Grid item style={{ marginTop: 15 }} xs={11}>
            <Grid container direction='row' justify='flex-end'>
              <Grid item>
                <Link onClick={() => history.push('/forgot-password')} style={{ cursor: 'pointer' }} color='inherit'>
                  <FaLock className='mr-1' /> Esqueceu sua Senhasss?
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11}>
            <Box marginTop={3}>
              <Btn name='Entrar' type='submit' id='login' />
            </Box>
          </Grid>
        </Grid>
      </form>
    </Accounts>
  )
}
Login.propTypes = {
  history: PropTypes.any.isRequired
}
export default Login
