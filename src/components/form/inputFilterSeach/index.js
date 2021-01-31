import React, { useEffect, useState, useRef } from 'react'
import { TextField, CircularProgress } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { usePromiseTracker } from 'react-promise-tracker'
import PropTypes from 'prop-types'
import services from 'api'
import debounce from 'lodash.debounce'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  FormControl: {
    maxHeight: '70px'
  },
  FormControlMax: {
    maxHeight: '150px'
  }
})

function AsyncSelect ({ outlineError, setValue, id, queryDefault, optionsDefault = null, valueDefault = false, queryParams, url, name, value, register, label, InputProps, message, errors, onChange, ...props }) {
  const [optionsFields, setOptionsFields] = useState([])
  const [optionSelected, setOptionSelected] = useState(null)
  const { promiseInProgress } = usePromiseTracker({ area: id })
  const generalProgress = usePromiseTracker()
  const debouncedSave = useRef(debounce(nextValue => getData(nextValue), 1000)).current

  const classes = useStyles()

  const getData = async (valueData) => {
    const data = valueData ? `${queryDefault || 'name'}=${valueData}` : ''
    const response = await services.listAllFilter(url, { valueQuery: `${data}${queryParams || ''}` }, id)
    if (response) setOptionsFields(Array.isArray(response) ? response : response.data)
  }
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (valueDefault && Object.keys(valueDefault).length) setValue(name, valueDefault)
  }, [optionsDefault, valueDefault])

  const handleChange = (e) => {
    debouncedSave(e.target.value)
  }
  useEffect(() => {
    if (!optionsDefault) setOptionSelected(optionsDefault)
  }, [optionsDefault])

  const handleChangeAutoComplete = (data) => {
    if (onChange) onChange(data)
    if (setValue) setValue(name, data)
    setOptionSelected(data)
  }

  function serializeError (messageError) {
    switch (typeof messageError) {
      case 'object':
        return Object.keys(messageError).map(key => key !== 'message' ? messageError[key].message : messageError[key])
      case 'string':
      case messageError:
        return messageError
      default:
        return 'Ocorreu um problema ao preencher o campo'
    }
  }

  return (
    <Autocomplete
      options={optionsFields}
      getOptionLabel={(option) => option.name || option.description || ''}
      onChange={(e, data) => handleChangeAutoComplete(data)}
      loading={promiseInProgress || (generalProgress.promiseInProgress && !id)}

      noOptionsText='Sem opções'
      size='small'
      renderInput={(params) => {
        return (
          <FormControl className={outlineError ? classes.FormControl : classes.FormControlMax} fullWidth error>

            <TextField
              margin='normal'
              variant='outlined'
              {...params}
              inputRef={register}
              label={label}
              name={name}
              error={!!errors}
              aria-describedby={`component-helper-text${name}`}
              fullWidth
              value={params}
              onChange={handleChange}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {promiseInProgress || (generalProgress.promiseInProgress && !id)
                      ? <CircularProgress color='inherit' size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                )
              }}
            />

            <FormHelperText id={`component-helper-text${name}`}>
              {errors ? serializeError(message) : ''}
            </FormHelperText>

          </FormControl>

        )
      }}
      value={optionSelected || optionsDefault}
    />
  )
}

AsyncSelect.propTypes = {
  id: PropTypes.string,
  queryParams: PropTypes.any,
  url: PropTypes.string,
  name: PropTypes.any,
  value: PropTypes.any,
  register: PropTypes.any,
  label: PropTypes.string,
  InputProps: PropTypes.any,
  message: PropTypes.any,
  errors: PropTypes.any,
  props: PropTypes.any,
  queryDefault: PropTypes.any,
  outlineError: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  optionsDefault: PropTypes.object,
  valueDefault: PropTypes.object,
  setValue: PropTypes.func
}
export default AsyncSelect
