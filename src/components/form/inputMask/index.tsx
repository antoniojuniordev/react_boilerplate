import { Form } from 'antd';
import MaskedInput from 'antd-mask-input';

function InputMask({ ...props }: any) {
  return (
    <Form.Item
      validateStatus={props?.error ? 'error' : 'success'}
      label={props.label}
    >
      <MaskedInput {...props} size='large' />
      {props.error && (
        <div role='alert' className='ant-form-item-explain-error'>
          {props.error}
        </div>
      )}
    </Form.Item>
  );
}

export default InputMask;
