import { Form, Input as InputAnt, InputProps } from 'antd';

interface Props {
  error: string | boolean | undefined;
  label: string;
}

function TextAreaCust({ error, label, ...props }: Props & any) {
  return (
    <Form.Item validateStatus={error ? 'error' : 'success'} label={label}>
      <InputAnt.TextArea {...props} />
      {error && (
        <div role='alert' className='ant-form-item-explain-error'>
          {error}
        </div>
      )}
    </Form.Item>
  );
}

export default TextAreaCust;
