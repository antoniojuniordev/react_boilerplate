import { styled } from '@mui/system';

export const Main = styled('main')({
  display: 'table',
  height: '100vh',
  margin: '0 auto',
  width: '400px',
});

export const Container = styled('section')({
  display: 'table-cell',
  verticalAlign: 'middle',
});

export const Card = styled('section')({
  border: 'none',
  width: '400px',
  boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)',
  transition: 'all 0.3s ease-in-out, background 0s, color 0s, border-color 0s',
  padding: '22px',
  borderRadius: '5px',
});
