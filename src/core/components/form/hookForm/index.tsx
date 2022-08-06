import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ForwardedRef, forwardRef, Ref, useImperativeHandle } from 'react';
import yup from '../yup';

export interface PropsForm<T> extends UseFormProps {
  render: (props: UseFormReturn) => JSX.Element;
  onSubmit: (onValid: T, onInvalid?: any) => Promise<void>; // eslint-disable-line
  handleSubmit?: Pick<UseFormReturn, 'handleSubmit'>;
  resetField?: Pick<UseFormReturn, 'resetField'>;
  validations: yup.AnyObjectSchema;
}

export interface HandleForm<T> {
  setValues?: (props: T) => void;
  resetForm?: () => void;
}

function FormComponent<T>(
  { render, onSubmit, validations, ...props }: PropsForm<T>,
  ref?: ForwardedRef<HandleForm<T>>
) {
  const renderForm = useForm({ resolver: yupResolver(validations), ...props });

  useImperativeHandle(ref, () => ({
    setValues(payload: T) {
      if (props?.defaultValues) {
        renderForm.reset(
          Object.keys(props?.defaultValues as object).map((key: string) => ({
            [key as `${string}.${string}`]:
              payload[key as keyof typeof payload],
          }))
        );
      }
    },
    resetForm() {
      console.log('resetForm', props?.defaultValues);
      renderForm.reset(props?.defaultValues);
    },
  }));

  return (
    <form onSubmit={renderForm?.handleSubmit((data) => onSubmit(data as T))}>
      {render(renderForm)}
    </form>
  );
}
export default forwardRef(FormComponent) as <T>(
  props: PropsForm<T> & { ref?: Ref<HandleForm<T>> }
) => JSX.Element;
