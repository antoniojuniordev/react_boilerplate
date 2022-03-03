import { Dropdown, Layout, Menu } from 'antd';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  GroupOutlined,
} from '@ant-design/icons';
import { Select } from 'antd';

import '../style.css';
import Avatar from 'antd/lib/avatar/avatar';

const profile = (
  <Menu>
    <Menu.Item key='0'>
      <UserOutlined /> Perfil
    </Menu.Item>
    <Menu.Item key='1'>
      <GroupOutlined /> Grupo de Recurso
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='2'>
      <LogoutOutlined /> Sair
    </Menu.Item>
  </Menu>
);

export function NavBar(props: any) {
  function onChange(value: string) {
    console.log(`selected ${value}`);
  }

  function onSearch(val: string) {
    console.log('search:', val);
  }

  return (
    <Layout.Header className='site-layout-background'>
      <div>
        {props.isMobile &&
          (props.collapsed ? (
            <MenuUnfoldOutlined className='trigger' onClick={props.toggle} />
          ) : (
            <MenuFoldOutlined className='trigger' onClick={props.toggle} />
          ))}
        <Select
          size='large'
          showSearch
          placeholder='Select a person'
          optionFilterProp='children'
          onChange={onChange}
          onSearch={onSearch}
        >
          <Select.Option value='jack'>Jack</Select.Option>
          <Select.Option value='lucy'>Lucy</Select.Option>
          <Select.Option value='tom'>Tom</Select.Option>
        </Select>
      </div>

      <div className='content-nav'>
        <Dropdown overlay={profile} trigger={['click']} className='mr-1'>
          <div className='content-avatar'>
            <div className='content-user'>
              <span className='user user-name'>User</span>
              <span className='user user-group'>Itlean</span>
            </div>
            <Avatar className='avatar' size={45} icon={<UserOutlined />} />
          </div>
        </Dropdown>
      </div>
    </Layout.Header>
  );
}
