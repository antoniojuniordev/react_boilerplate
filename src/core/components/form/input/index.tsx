import { Form, Input as InputAnt, InputProps } from 'antd';

interface Props {
  error?: string | boolean | undefined;
  label?: string;
}

function Input({ ...props }: InputProps & Props) {
  return (
    <Form.Item
      validateStatus={props?.error ? 'error' : 'success'}
      label={props.label}
    >
      <InputAnt {...props} size='large' />
      {props.error && (
        <div role='alert' className='ant-form-item-explain-error'>
          {props.error}
        </div>
      )}
    </Form.Item>
  );
}

export default Input;
