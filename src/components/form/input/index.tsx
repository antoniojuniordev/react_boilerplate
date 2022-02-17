import { Form, Input as InputAnt } from 'antd';

function Input({ ...props }: any) {
  return (
    <Form.Item
      validateStatus={props?.error ? 'error' : 'success'}
      label={props.label}
    >
      <InputAnt {...props} />
      {props.error && (
        <div role='alert' className='ant-form-item-explain-error'>
          {props.error}
        </div>
      )}
    </Form.Item>
  );
}

export default Input;
