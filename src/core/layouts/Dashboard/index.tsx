import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import NavBar from './navbar';
import { DRAWER_WIDTH, DRAWER_CLOSED_WIDTH, SideBar } from './sidebar';

import * as React from 'react';
import Grid from '@mui/material/Grid';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

export interface PropsDashboardLayout {
  open?: boolean;
  onCloseSidebar?: () => void;
}

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')<Pick<PropsDashboardLayout, 'open'>>(
  ({ theme, open }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100vh',
    minWidth: `calc(100vw - ${open ? DRAWER_WIDTH : DRAWER_CLOSED_WIDTH}px)`,
    transitionTimingFunction: 'linear!important',
    transition: open ? 'none!important' : 'all 0.050s!important',
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    paddingTop: APP_BAR_MOBILE + 24,
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 5,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down('lg')]: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
  })
);

const DashboardLayout: React.FC = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <RootStyle>
      <NavBar onOpenSidebar={toggleDrawer} open={open} />
      <SideBar open={open} onCloseSidebar={toggleDrawer} />
      <RootStyle>
        <MainStyle open={open}>
          <Grid container>
            <Grid item xs={12}>
              <Outlet />
            </Grid>
          </Grid>
        </MainStyle>
      </RootStyle>
    </RootStyle>
  );
};

export default DashboardLayout;
