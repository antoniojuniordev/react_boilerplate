import styled from 'styled-components';

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  /* background: papayawhip; */
  font-family: ${({ theme }) => theme.font.subTitle};
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
