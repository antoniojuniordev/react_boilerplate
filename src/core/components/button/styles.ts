import styled from 'styled-components'

interface PropsButton {
  disabled?: boolean
  block?: boolean
}

export const Button = styled.button<PropsButton>`
  border: 0;
  padding: ${(props) =>
    !props.block ? '0.77rem 1.5rem 0.77rem 1.5rem' : '0.77rem 1.5rem'};
  box-shadow: none;
  cursor: pointer;
  outline: none;
  border-radius: 0.475rem;
  width: ${(props) => props.block && '100%'};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  font-size: inherit;
  line-height: inherit;
`
