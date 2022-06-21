import styled from 'styled-components';

export const Conteiner = styled.section`
  height: 100vh;
  display: table;
  margin: 0 auto;
  /* background: papayawhip; */
`;

export const CardAlign = styled.article`
  display: table-cell;
  vertical-align: middle;
`;

export const Card = styled.section`
  border: none;
  width: 400px;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  transition: all 0.3s ease-in-out, background 0s, color 0s, border-color 0s;
  padding: 22px;
  border-radius: 5px;
`;
