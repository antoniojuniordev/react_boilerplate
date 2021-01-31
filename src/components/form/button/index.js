import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import PropTypes from 'prop-types'
import Load from 'components/load'
import { usePromiseTracker } from 'react-promise-tracker'

function Btn ({ id, name, buttonIconFlat, ...props }) {
  const { promiseInProgress } = usePromiseTracker({ area: id })
  const generalProgress = usePromiseTracker()

  return (
    <>
      {promiseInProgress || (generalProgress.promiseInProgress && !id) ? (
        <Load />
      ) : buttonIconFlat ? (
        <IconButton fullWidth variant='contained' color='primary' {...props}>
          {buttonIconFlat}
        </IconButton>
      ) : (
        <Button fullWidth type='submit' variant='contained' color='primary' style={{ marginTop: 8 }} {...props}>
          {name}
        </Button>
      )}
    </>
  )
}
Btn.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  buttonIconFlat: PropTypes.any
}
export default Btn
