import React from 'react';
import { styled } from '@mui/material/styles';
import { Toolbar, IconButton, Typography } from '@mui/material';
import { icons } from 'core/assets';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import AccountPopover from '../account-propover';
import { DRAWER_WIDTH } from '../sidebar';
import useGetRouteName from 'core/utils/hooks/useGetRouteName';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
export interface PropsNavBar {
  onOpenSidebar: () => void;
  open: boolean;
}
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.primary.main,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function NavBar({ onOpenSidebar, open, ...props }: PropsNavBar) {
  const routeName = useGetRouteName();

  return (
    <AppBar position='absolute' open={open} {...props}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={onOpenSidebar}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <icons.menu />
        </IconButton>
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {routeName}
        </Typography>
        <AccountPopover />
      </Toolbar>
    </AppBar>
  );
}
