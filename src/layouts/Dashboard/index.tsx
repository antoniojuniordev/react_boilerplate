import { Outlet } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Avatar, Row, Col, Dropdown } from 'antd';
import {
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import './style.css';
const { Header, Content } = Layout;
const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item key='0'>
      <UserOutlined /> Perfil
    </Menu.Item>
    <Menu.Item key='1'>
      <PieChartOutlined /> Faturamento
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='2'>
      <LogoutOutlined /> Sair
    </Menu.Item>
  </Menu>
);

export function DashboardLayout() {
  return (
    <Layout>
      <Header style={{ zIndex: 1, width: '100%' }}>
        <Row>
          <div className='logo' />
          <Col flex={4}>
            <Menu theme='dark' mode='horizontal'>
              <Menu.Item key='mail' icon={<MailOutlined />}>
                Navigation One
              </Menu.Item>
              <SubMenu
                key='SubMenu'
                icon={<SettingOutlined />}
                title='Navigation Three - Submenu'
              >
                <Menu.ItemGroup title='Item 1'>
                  <Menu.Item key='setting:1'>Option 1</Menu.Item>
                  <Menu.Item key='setting:2'>Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title='Item 2'>
                  <Menu.Item key='setting:3'>Option 3</Menu.Item>
                  <Menu.Item key='setting:4'>Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Col>
          <Dropdown overlay={menu} trigger={['click']}>
            <a
              className='ant-dropdown-link'
              onClick={(e) => e.preventDefault()}
            >
              <Avatar size={40} icon={<UserOutlined />} />
            </a>
          </Dropdown>
        </Row>
      </Header>
      <Content
        className='site-layout'
        style={{ padding: '0 20px', marginTop: 10 }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 380 }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
}
