import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Controller, ControllerProps } from 'react-hook-form';
import { translate } from 'core/i18n';

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
          {...props}
          {...field}
          margin='normal'
          variant='outlined'
          label={translate(String(label))}
          error={Boolean(fieldState?.error)}
          helperText={
            fieldState?.error && translate(String(fieldState?.error?.message))
          }
        />
      )}
    />
  );
}

export default Input;
