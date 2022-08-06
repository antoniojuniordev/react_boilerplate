import { Box, SvgIcon } from '@mui/material';
import { icons, images } from 'core/assets';
import { Image } from 'core/components';

export interface PropsSideBarConfig {
  title: string;
  icon?: JSX.Element;
  path: string;
  info?: string;
  children?: Array<PropsSideBarConfig>;
}

function getIcon(component: typeof SvgIcon) {
  return <Box component={component} width={22} height={22} />;
}

const sidebarConfig: Array<PropsSideBarConfig> = [
  {
    title: 'Início',
    path: '/dashboard',
    icon: getIcon(icons.home),
  },
  {
    title: 'Usuários',
    path: '/users',
    icon: getIcon(icons.person),
  },
  {
    title: 'Serviços',
    path: '/services',
    icon: getIcon(icons.designServices),
  },
  {
    title: 'Especialidade',
    path: '/specialty',
    icon: getIcon(icons.diviceHub),
  },
  {
    title: 'Departamentos',
    path: '/departments',
    icon: Image({ src: images.departments, sx: { width: 22, height: 22 } }),
  },
];

export default sidebarConfig;
