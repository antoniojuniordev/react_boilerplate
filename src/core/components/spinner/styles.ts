import styled, { keyframes } from 'styled-components'
import { PropsSpinner } from '.'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div<PropsSpinner>`
  animation: ${rotate360} 0.8s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid transparent;
  border-right: ${({ color, theme }) =>
    '2px solid' + theme.colors[color || 'primary']};
  border-bottom: ${({ color, theme }) =>
    '2px solid' + theme.colors[color || 'primary']};
  border-left: ${({ color, theme }) =>
    '2px solid' + theme.colors[color || 'primary']};
  background: transparent;
  border-radius: 100%;
  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
  margin-left: ${(props) => props.text && '10px'};
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
