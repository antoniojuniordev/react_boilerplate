import styled from 'styled-components'

export const Error = styled.span`
  width: 100%;
  margin-top: 0.5rem;
  font-size: 0.925rem;
  font-family: ${({ theme }) => theme.font.light};
  color: ${({ theme }) => theme.colors.red};
`
