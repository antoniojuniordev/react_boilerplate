import React from 'react'
import MaskedInput from 'react-text-mask'

function MaskedInputCustom ({ inputRef, ...props }) {
  return (
    <MaskedInput
      {...props}
      ref={ref => inputRef(ref ? ref.inputElement : null)}
      guide={false}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

export default MaskedInputCustom
