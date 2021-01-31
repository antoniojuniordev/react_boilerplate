import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

function Input ({ name, type, errors, ...props }) {
  return (
    <TextField
      fullWidth
      variant='outlined'
      margin='normal'
      type={type}
      error={errors}
      name={name}
      aria-describedby={`component-helper-text${name}`}
      {...props}
    />
  )
}
Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.any
}
export default Input
