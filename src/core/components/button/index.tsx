import Spinner from 'core/components/spinner'

import * as Styled from './styles'

export interface PropsButton {
  name: string
  color?: 'primary'
  block?: boolean
  className?: string
  disabled?: boolean
  onClick?: () => void
  isLoading?: boolean
}

function Button({
  name,
  disabled,
  color,
  className,
  isLoading,
  ...props
}: PropsButton) {
  let classNameBtn = className + ' ' || ''
  classNameBtn = classNameBtn + color || ''

  return (
    <Styled.Button
      className={classNameBtn}
      name={name}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner text='Please wait...' size={18} color='white' />
      ) : (
        name
      )}
    </Styled.Button>
  )
}

export default Button
