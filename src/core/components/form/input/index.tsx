import InputErros from 'core/components/form/input-error'
import { useFormContext } from 'react-hook-form'
import * as Styled from './styles'
import { InputHTMLAttributes } from 'react'

export type InputProps = {
  placeholder: string
  name?: string
  mask?: string
  className?: string
  type?: string
  errorMsg?: string
} & InputHTMLAttributes<HTMLInputElement>

function Input({
  name,
  type = 'text',
  className,
  errorMsg,
  placeholder,
  mask,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  let errorField = errorMsg
  if (name && errors[name || '']?.message) {
    errorField = String(errors[name || '']?.message)
  }

  return (
    <div className={className}>
      <Styled.InputMask
        mask={mask || ''}
        placeholder={placeholder}
        type={type}
        {...rest}
        {...(!!name && register(name))}
      />
      <InputErros error={errorField} />
    </div>
  )
}

export default Input
