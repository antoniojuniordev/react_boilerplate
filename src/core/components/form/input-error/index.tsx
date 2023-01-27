import * as Styled from './styles'

export interface InputErrosProps {
  error?: string
}

function InputErros({ error }: InputErrosProps) {
  return <Styled.Error>{error ? error : ''}</Styled.Error>
}

export default InputErros
