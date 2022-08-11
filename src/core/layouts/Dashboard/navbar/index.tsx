import { styled } from '@mui/material/styles';
import { Toolbar, IconButton } from '@mui/material';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import AccountPopover from '../account-propover';
import { DRAWER_WIDTH } from '../sidebar';
import Icons from 'core/components/icons/getIcons';
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
  return (
    <AppBar position='absolute' open={open} {...props}>
      <Toolbar sx={{ pr: '24px' }}>
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
          <Icons size='22' name='HambergerMenu' />
        </IconButton>
        {/* <AccountPopover /> */}
      </Toolbar>
    </AppBar>
  );
}
