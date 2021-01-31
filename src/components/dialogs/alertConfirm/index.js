import React from 'react'
import { Button, Dialog, Typography, DialogActions, DialogContent, DialogContentText } from '@material-ui/core/'

import DialogTitle from '@material-ui/core/DialogTitle'
import PropTypes from 'prop-types'
function AlertConfirm ({ action, stateOpen, title, message, type = 'information' }) {
  const { open, change } = stateOpen

  function handleClose (confirm) {
    if (confirm) action()
    change(false)
  }

  return (
    <>
      <Dialog
        open={open}
        keepMounted
        fullWidth
        maxWidth='xs'
        onClose={() => handleClose(false)}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            <Typography component='span' variant='body2'>
              {message}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color='primary'>
            Cancelar
          </Button>
          <Button onClick={() => handleClose(true)} color='primary'>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

AlertConfirm.propTypes = {
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  stateOpen: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
}

export default AlertConfirm
