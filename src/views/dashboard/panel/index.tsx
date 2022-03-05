import { destroySession } from 'services/storage';

export default function Dashboard() {
  function click() {
    destroySession();
  }
  {
    /* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}
          >
            Bill is a cat.
          </div> */
  }
  return <button onClick={click}>dashboard</button>;
}
