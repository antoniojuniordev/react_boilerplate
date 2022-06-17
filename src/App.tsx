import Routers from 'core/routes';
import { ConfigProvider } from 'antd';
import pt_BR from 'antd/lib/locale/pt_BR';

export default function App() {
  return (
    <ConfigProvider locale={pt_BR}>
      <Routers />
    </ConfigProvider>
  );
}
