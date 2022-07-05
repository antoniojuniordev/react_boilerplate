import Routers from 'core/routes';
import { Notification } from 'core/services/notification';
import ThemeConfig from 'core/styles';

export default function App() {
  return (
    <>
      <Notification />
      <ThemeConfig>
        <Routers />
      </ThemeConfig>
    </>
  );
}
