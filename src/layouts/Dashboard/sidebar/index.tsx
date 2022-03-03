import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import logo from 'assets/images/logo.svg';

import '../style.css';

interface MenuInfo {
  key: string;
}

export function SideBar(props: any) {
  const location = useLocation();
  const [pathname, setPathname] = useState('/dashboard');

  useEffect(() => {
    setPathname(location.pathname);
  }, []);

  function selectRouter(event: MenuInfo) {
    setPathname(event.key);
  }

  return (
    <Layout.Sider
      className='menu-sidebar'
      collapsible
      collapsed={props.collapsed}
      onCollapse={props.toggle}
      breakpoint='sm'
      width='256px'
      theme='light'
      onBreakpoint={(broken: boolean) => {
        props.setMobile(!broken);
      }}
      collapsedWidth={props.isMobile ? '80' : '0'}
    >
      <div className='sidebar-logo'>
        <img src={logo} alt='logo' className='logo' height='50' width='50' />
        {!props.collapsed && (
          <h3 style={{ marginTop: '8px' }}>
            React<strong>Dev</strong>
          </h3>
        )}
      </div>
      <Menu
        theme='light'
        mode='inline'
        selectedKeys={[pathname]}
        defaultOpenKeys={[pathname]}
        onClick={selectRouter}
      >
        <Menu.Item key='/dashboard' icon={<HomeOutlined />}>
          <Link to='/dashboard'>
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='/user' icon={<UserOutlined />}>
          <Link to='/user'>
            <span>Usuários</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
