import React from 'react'
import PropTypes from 'prop-types'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'

function SelectComponent ({ data, errors, id, label, errorMessage, name, onChange, ref, register, value }) {
  function serializeError (message) {
    switch (typeof message) {
      case 'object':
        return Object.keys(message).map((key) => (key !== 'message' ? message[key].message : message[key]))
      case 'string':
      case message:
        return message
      default:
        return 'Ocorreu um problema ao preencher o campo'
    }
  }

  return (
    <FormControl variant='outlined' size='small' fullWidth error={Boolean(errors)}>
      <InputLabel>{label}</InputLabel>
      <Select id={id} name={name} label={label} onChange={onChange} value={value} inputRef={register} ref={ref}>
        {data.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText id={`component-helper-text${name}`}>{errors ? serializeError(errorMessage) : ''}</FormHelperText>
    </FormControl>
  )
}

SelectComponent.propTypes = {
  data: PropTypes.any.isRequired,
  errors: PropTypes.any,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.any,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  ref: PropTypes.any,
  register: PropTypes.any,
  value: PropTypes.any.isRequired
}

export default SelectComponent
