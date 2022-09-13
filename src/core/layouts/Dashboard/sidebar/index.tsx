import { styled } from '@mui/material/styles';
import { PropsDashboardLayout } from 'core/layouts/Dashboard';
import {
  Divider,
  Drawer as MuiDrawer,
  Grid,
  IconButton,
  List,
  Toolbar,
} from '@mui/material';
import SidebarConfig from './sidebarConfig';
import Image from 'core/components/image';
import { images } from 'core/assets';
import Icons from 'core/components/icons/getIcons';
import NavSection from 'core/components/nav-section';

export const DRAWER_WIDTH = 240;
export const DRAWER_CLOSED_WIDTH = 55;

type PropsSideBar = Pick<PropsDashboardLayout, 'open' | 'onCloseSidebar'>;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: DRAWER_CLOSED_WIDTH,
      [theme.breakpoints.up('sm')]: {
        width: DRAWER_CLOSED_WIDTH,
      },
    }),
  },
}));

export function SideBar({ open, onCloseSidebar }: PropsSideBar) {
  return (
    <Drawer variant='permanent' open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: [1],
        }}
      >
        <Grid
          container
          sx={open ? {} : { height: 0 }}
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item sm>
            <Grid container justifyContent='center'>
              <Grid item>
                <Image
                  sx={{ width: open ? 120 : 0 }}
                  src={images.logo.default}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton onClick={onCloseSidebar}>
              <Icons size='22' name='HambergerMenu' />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>

      {!open && (
        <Grid container justifyContent='center' sx={{ p: 1 }}>
          <Grid item>
            <Image sx={{ width: 30 }} src={images.logo.default} />
          </Grid>
        </Grid>
      )}
      <Divider />
      <List component='nav'>
        <NavSection navConfig={SidebarConfig} />
      </List>
    </Drawer>
  );
}
