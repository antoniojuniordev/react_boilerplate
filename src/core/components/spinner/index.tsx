import * as Styled from './styles'

export interface PropsSpinner {
  size?: number
  text?: string
  color?: 'primary' | 'white'
}

function Spinner({ size = 24, text, color = 'primary' }: PropsSpinner) {
  if (text)
    return (
      <Styled.Container>
        {text}
        <Styled.Spinner size={size} text={text} color={color} />
      </Styled.Container>
    )
  return <Styled.Spinner size={size} color={color} />
}

export default Spinner
