import { Button, DatePicker } from 'antd';
import './style.css';

export default function Login() {
  return (
    <div>
      <DatePicker />
      <Button type='primary' style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
}
