import 'react-notifications-component/dist/theme.css';
import Routers from 'routes';

export default function App() {
  console.log(process.env.URL);
  return (
    <>
      <h1>learn react {process.env.URL}</h1>
      <Routers />
    </>
  );
}
