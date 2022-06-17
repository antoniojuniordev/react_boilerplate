import { Dropdown, Layout, Menu } from 'antd';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import '../style.css';
import Avatar from 'antd/lib/avatar/avatar';

interface Props {
  isMobile: boolean;
  collapsed: boolean;
  toggle(): void;
}

const profile = (
  <Menu>
    <Menu.Item key='0'>
      <UserOutlined /> Perfil
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='2'>
      <LogoutOutlined /> Sair
    </Menu.Item>
  </Menu>
);

export function NavBar(props: Props) {
  return (
    <Layout.Header className='site-layout-background'>
      <div>
        {props.collapsed ? (
          <MenuUnfoldOutlined className='trigger' onClick={props.toggle} />
        ) : (
          <MenuFoldOutlined className='trigger' onClick={props.toggle} />
        )}
      </div>

      <div className='content-nav'>
        <Dropdown overlay={profile} trigger={['click']} className='mr-1'>
          <div className='content-avatar'>
            <div className='content-user'>
              <span className='user user-name'>User</span>
              <span className='user user-group'>Adm</span>
            </div>
            <Avatar className='avatar' size={45} icon={<UserOutlined />} />
          </div>
        </Dropdown>
      </div>
    </Layout.Header>
  );
}
