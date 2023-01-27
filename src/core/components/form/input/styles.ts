import styled, { css } from 'styled-components'
import { default as InputMaskLib } from 'react-input-mask'

export const InputCss = css`
  margin: 0;
  width: 100%;
  height: 3rem;
  font-weight: 500;
  line-height: 1.5;
  appearance: none;
  box-shadow: none;
  padding: 0.63rem 0.82rem;
  border-radius: 0.475rem;
  background-clip: padding-box;
  background-color: transparent;
  font-family: ${({ theme }) => theme.font.family};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: ${({ theme }) => theme.colors.inputColor};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.inputActive};
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.inputActive};
  }
  &-webkit-autofill::first-line {
    font-family: ${({ theme }) => theme.font.family};
    font-size: 1rem;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.inputColor};
    transition: background-color 5000s ease-in-out 0s;
  }
`

export const InputMask = styled(InputMaskLib)`
  ${InputCss}
`
