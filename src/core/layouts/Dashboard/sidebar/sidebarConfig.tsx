import Icons from 'core/components/icons/getIcons';

export interface PropsSideBarConfig {
  title: string;
  icon?: JSX.Element;
  path: string;
  info?: string;
  children?: Array<PropsSideBarConfig>;
}

const sidebarConfig: Array<PropsSideBarConfig> = [
  {
    title: 'Início',
    path: '/dashboard',
    icon: <Icons size='22' name='Eye' />,
  },
];

export default sidebarConfig;
