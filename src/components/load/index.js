import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress, Grid } from '@material-ui/core'

function Load ({ size = 'normal' }) {
  const sizeProgress = { normal: 40, small: 15, medium: 25 }
  return (
    <Grid
      container
      direction='row'
      justify='center'
    >
      <Grid item>
        <CircularProgress size={sizeProgress[size || 'normal']} />
      </Grid>
    </Grid>
  )
}
Load.propTypes = {
  size: PropTypes.string
}
export default Load
