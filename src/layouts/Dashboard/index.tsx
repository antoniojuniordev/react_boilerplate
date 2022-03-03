import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import './style.css';
import { NavBar } from './navbar';
import { SideBar } from './sidebar';

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setMobile] = useState(false);

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar
        collapsed={collapsed}
        toggle={toggle}
        isMobile={isMobile}
        setMobile={setMobile}
      />
      <Layout className='site-layout'>
        <NavBar collapsed={collapsed} toggle={toggle} isMobile={isMobile} />
        <Layout.Content className='inner-content'>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
