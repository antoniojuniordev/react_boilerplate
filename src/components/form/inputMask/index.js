import React from 'react'
import PropTypes from 'prop-types'

import { TextField } from '@material-ui/core'
import MaskedInputCustom from './MaskedInput'

function InputMask ({ label, name, errors, message, mask, value, control, ...props }) {
  return (
    <TextField
      variant='outlined'
      margin='normal'
      fullWidth
      name={name}
      label={label}
      id={label}
      error={!!errors}
      helperText={errors ? message : ''}
      {...props}
      InputProps={{
        inputComponent: MaskedInputCustom,
        inputProps: { mask: mask }
      }}
    />
  )
}

InputMask.propTypes = {
  disabled: PropTypes.bool,
  errors: PropTypes.bool,
  message: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  mask: PropTypes.any,
  control: PropTypes.any,
  value: PropTypes.any
}

export default InputMask
