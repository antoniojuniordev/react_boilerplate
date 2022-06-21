import { Controller, ControllerProps } from 'react-hook-form';
import * as Styled from './styles';

export type InputProps = {
  label: string;
  prefixName?: string;
};

function Input({
  control,
  prefixName,
  name,
  label,
  ...props
}: InputProps & Omit<ControllerProps, 'render'>) {
  return (
    <Controller
      {...props}
      name={
        prefixName ? (`${prefixName}.${name}` as `${string}.${string}`) : name
      }
      control={control}
      render={({ field, fieldState }) => (
        <>
          <Styled.Input
            {...props}
            {...field}
            // margin='normal'
            // label={label}
            // error={!!fieldState?.error}
            // helperText={fieldState?.error?.message}
          />
        </>
      )}
    />
  );
}

export default Input;
