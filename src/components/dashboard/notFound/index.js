import React from 'react'
import PropTypes from 'prop-types'

import { Box, Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Btn from 'components/form/button'

import notFoundImg from 'assets/not-found.svg'

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  img: {
    height: 180,
    marginBottom: 15
  }
}))

const NotFound = ({ history }) => {
  const classes = useStyles()

  const sendLogin = () => { history.push('/') }

  return (
    <Box height='100vh' clone>
      <Grid
        container
        justify='center'
        alignItems='center'
      >
        <Grid item sm={12}>
          <Box height={1} width={1} clone>
            <Grid container alignItems='center' justify='center'>
              <Container component='main' maxWidth='xs'>
                <Grid container justify='center' direction='column' alignItems='center'>
                  <img src={notFoundImg} className={classes.img} alt='Imagem rota não encontrada' />
                </Grid>
                <Grid item xs={12}>
                  <Btn name='Voltar' onClick={() => sendLogin()} className={classes.submit} />
                </Grid>
              </Container>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
NotFound.propTypes = {
  history: PropTypes.any
}
export default NotFound
