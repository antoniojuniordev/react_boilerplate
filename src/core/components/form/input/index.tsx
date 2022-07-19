import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Controller, ControllerProps } from 'react-hook-form';

export type TypePrefixName = Omit<TextFieldProps, 'name'> & {
  prefixName?: TextFieldProps['name'];
};

export type InputProps = TextFieldProps &
  Omit<ControllerProps, 'render'> &
  TypePrefixName;

function Input({ control, prefixName, name, label, ...props }: InputProps) {
  return (
    <Controller
      {...props}
      name={
        prefixName ? (`${prefixName}.${name}` as `${string}.${string}`) : name
      }
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          margin='normal'
          variant='outlined'
          {...props}
          label={label}
          {...field}
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
        />
      )}
    />
  );
}

export default Input;
