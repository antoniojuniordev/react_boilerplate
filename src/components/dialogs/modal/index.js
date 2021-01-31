import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import PropTypes from 'prop-types'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import { FaTimes } from 'react-icons/fa'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}))

const ModalComponent = ({ children, handleModalClose, open, title, width }) => {
  const classes = useStyles()

  return (
    <Dialog
      aria-labelledby={title}
      onClose={handleModalClose}
      maxWidth={width || 'sm'}
      disableBackdropClick
      open={open}
      fullWidth
    >
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant='h6'> {title}</Typography>
        <IconButton aria-label='close' className={classes.closeButton} onClick={handleModalClose}>
          <FaTimes />
        </IconButton>
      </MuiDialogTitle>
      <MuiDialogContent style={{ minHeight: 150 }} dividers>
        {children}
      </MuiDialogContent>
    </Dialog>
  )
}
ModalComponent.propTypes = {
  children: PropTypes.object,
  handleModalClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.any
}
export default ModalComponent
