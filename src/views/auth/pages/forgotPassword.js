import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { Box, Grid, makeStyles } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import Input from 'components/form/input'
import Btn from 'components/form/button'
import Accounts from 'components/accounts'

import services from 'views/auth/services'
import emailSend from 'assets/email-send.svg'
import { validationsForgotPassword } from 'views/auth/validations'

const useStyles = makeStyles((theme) => ({
  img: {
    height: 120,
    marginBottom: 15
  }
}))

const initialValues = { email: '' }

function ForgotPassword ({ history }) {
  const classes = useStyles()
  const [email, setEmail] = useState('as')
  const [sendEmail, setSendEmail] = useState(false)

  const formik = useFormik({
    initialValues,
    validationSchema: validationsForgotPassword,
    onSubmit
  })

  async function onSubmit (payload) {
    const response = await services.resetPassword({ email: payload.email }, 'forgotPassword')
    if (response) {
      setSendEmail(true)
      setEmail(payload.email)
    }
  }

  function redirectLogin () { history.push('/') }

  return (
    <Accounts history={history} title='Recuperação de Senha'>
      {sendEmail ? (
        <Grid container justify='center'>
          <Grid item xs={12}>
            <Grid container justify='center'>
              <img className={classes.img} src={emailSend} alt='Imagem do email enviado' />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Alert severity='success'>
              Um email foi enviado com as informações para. <strong>{email}</strong>
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <Btn name='Entrar' onClick={redirectLogin} />
          </Grid>
        </Grid>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Grid container justify='center'>
            <Grid item xs={12}>
              <Input
                fullWidth
                variant='outlined'
                name='email'
                type='email'
                label='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <Box marginTop={3}>
                <Btn name='Entrar' id='forgotPassword' />
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </Accounts>
  )
}
ForgotPassword.propTypes = {
  history: PropTypes.any.isRequired
}
export default ForgotPassword
