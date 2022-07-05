import TextField from '@mui/material/TextField';

function Input({ ...props }: any) {
  return <TextField fullWidth label='Filled' variant='filled' {...props} />;
}

export default Input;
