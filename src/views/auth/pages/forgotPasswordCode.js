import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { usePromiseTracker } from 'react-promise-tracker'
import { Box, Grid, makeStyles } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import Load from 'components/load'
import Input from 'components/form/input'
import Btn from 'components/form/button'
import Accounts from 'components/accounts'
import services from 'views/auth/services'
import timeImg from 'assets/time.svg'
import confirma from 'assets/confirma.svg'
import { validationsForgotPasswordCode } from 'views/auth/validations'

const useStyles = makeStyles((theme) => ({
  img: {
    height: 120,
    marginBottom: 15
  }
}))

const initialValues = {
  passwordOne: '',
  passwordTwo: ''
}

function ForgotPasswordCode ({ match, history }) {
  const classes = useStyles()
  const { code } = match.params
  const [codeValidity, setCodeValidity] = useState(true)
  const [passwordSuccess, setPasswordSuccess] = useState(false)
  const { promiseInProgress } = usePromiseTracker()

  const formik = useFormik({
    initialValues,
    validationSchema: validationsForgotPasswordCode,
    onSubmit
  })

  const getCode = async (codeConfirm) => {
    const response = await services.confirmResetPassword(codeConfirm)
    setCodeValidity(!!response)
  }

  useEffect(() => { getCode(code) }, [code])

  async function onSubmit (payload) {
    const response = await services.sendNewPassword({ ...payload, code }, 'forgotPasswordCode')

    if (response) {
      setPasswordSuccess(true)
      setTimeout(() => history.push('/'), 2000)
    }
  }

  function sendNew () { history.push('/forgot-password') }

  return (
    <>
      <Accounts history={history} title='Recuperação de Senha'>
        {promiseInProgress ? (<Load />) : (
          <>
            {codeValidity ? (
              <>
                {passwordSuccess ? (
                  <Grid container justify='center'>
                    <Grid item xs={12}>
                      <Grid container justify='center'>
                        <img className={classes.img} src={confirma} alt='Imagem do senha trocada' />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Alert severity='success'>
                      Senha trocada com sucesso. Você será redirecionado para o login
                      </Alert>
                    </Grid>
                  </Grid>
                ) : (
                  <form onSubmit={() => console.log('submit')}>
                    <Grid container justify='center'>
                      <Grid item xs={12}>
                        <Input
                          fullWidth
                          variant='outlined'
                          name='passwordOne'
                          type='password'
                          label='Senha'
                          value={formik.values.passwordOne}
                          onChange={formik.handleChange}
                          error={formik.touched.passwordOne && Boolean(formik.errors.passwordOne)}
                          helperText={formik.touched.passwordOne && formik.errors.passwordOne}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Input
                          fullWidth
                          variant='outlined'
                          name='passwordTwo'
                          type='password'
                          label='Confirmar senha'
                          value={formik.values.passwordTwo}
                          onChange={formik.handleChange}
                          error={formik.touched.passwordTwo && Boolean(formik.errors.passwordTwo)}
                          helperText={formik.touched.passwordTwo && formik.errors.passwordTwo}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box marginTop={3}>
                          <Btn name='Entrar' type='submit' id='forgotPasswordCode' />
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </>
            ) : (
              <Grid container justify='center'>
                <Grid item xs={12}>
                  <Grid container justify='center'>
                    <img className={classes.img} src={timeImg} alt='Imagem do código expirou' />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Alert severity='error'>
                    O link expirou, por favor tente enviar novamente.
                  </Alert>
                </Grid>
                <Grid item xs={12} className={classes.submit}>
                  <Btn name='Enviar novamente' onClick={() => sendNew()} />
                </Grid>
              </Grid>
            )}
          </>)}
      </Accounts>
    </>

  )
}
ForgotPasswordCode.propTypes = {
  history: PropTypes.any.isRequired,
  match: PropTypes.any
}
export default ForgotPasswordCode
