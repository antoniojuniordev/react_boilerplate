import React from 'react'
import { Box, Grid, Typography, Avatar, Container, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
const useStyles = makeStyles((theme) => ({
  avatarLogo: {
    transition: '0.3s',
    width: theme.spacing(10),
    height: theme.spacing(10)
  }
}))

function Accounts ({ title, children, history }) {
  const classes = useStyles()
  return (
    <Box height='100vh' clone>
      <Grid
        container
        justify='center'
        alignItems='stretch'
      >
        <Grid item sm={12}>
          <Box height={1} width={1} clone>
            <Grid container alignItems='center' justify='center'>
              <Container component='main' maxWidth='xs'>
                <Grid container justify='center' direction='column' alignItems='center'>
                  <Link
                    style={{ cursor: 'pointer' }}
                    onClick={() => history.push('/')}
                    color='inherit'
                  >
                    <Avatar className={classes.avatarLogo} src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
                  </Link>
                  <Box m={2}>
                    <Typography component='h1' variant='h5'>
                      {title}
                    </Typography>
                  </Box>
                  {children}
                </Grid>
                <Box mt={5}>
                  <Typography variant='body2' color='textSecondary' align='center'>
                    {'Copyright © '} Boilerplate 2021
                  </Typography>
                </Box>
              </Container>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
Accounts.propTypes = {
  history: PropTypes.any,
  title: PropTypes.string,
  children: PropTypes.any
}
export default Accounts
