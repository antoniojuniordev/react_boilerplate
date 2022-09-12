import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// material
import {
  List,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItemButtonProps,
} from '@mui/material';
import { PropsSideBarConfig } from 'core/constants/sidebarConfig';
import { generateUniqKey } from 'core/utils';
import { icons } from 'core/assets';

// ----------------------------------------------------------------------

function NavItem({
  icon,
  title,
  isActive,
  to,
  onClick,
  open,
  hasChildren,
  ...others
}: ListItemButtonProps & {
  title: string;
  icon?: JSX.Element;
  isActive?: boolean;
  to?: string;
  onClick?: () => void;
  open?: boolean;
  hasChildren?: boolean;
}) {
  const navigate = useNavigate();
  if (to) {
    return (
      <ListItemButton
        {...others}
        onClick={() => navigate(to)}
        disabled={!!isActive}
      >
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={title} disableTypography={!!isActive} />
      </ListItemButton>
    );
  }
  return (
    <ListItemButton {...others} onClick={() => onClick && onClick()}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={title} disableTypography={!!isActive} />
      {hasChildren && (open ? <icons.expandLess /> : <icons.expandMore />)}
    </ListItemButton>
  );
}

function ListItem({
  item,
  active,
}: {
  item: PropsSideBarConfig;
  active: (props?: string) => boolean;
}) {
  const isActiveFather = active(item?.path);
  const isActiveChildren = item.children?.some((itemChildren) =>
    active(itemChildren?.path)
  );

  const isActiveRoot = isActiveFather || !!isActiveChildren;

  const { title, path, icon, children } = item;
  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  if (children) {
    return (
      <React.Fragment key={generateUniqKey()}>
        <NavItem
          key={generateUniqKey()}
          onClick={handleOpen}
          isActive={isActiveRoot || isActiveChildren}
          open={open}
          title={title}
          icon={icon}
          hasChildren
        />

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {children.map((item) => {
              const { title, path, icon } = item;
              const isActiveSub = active(path);

              return (
                <NavItem
                  sx={{ pl: 4 }}
                  title={title}
                  key={generateUniqKey()}
                  icon={icon}
                  to={path}
                  isActive={isActiveSub}
                />
              );
            })}
          </List>
        </Collapse>
      </React.Fragment>
    );
  }

  return (
    <NavItem
      title={title}
      isActive={isActiveRoot}
      key={generateUniqKey()}
      icon={icon}
      to={path}
    />
  );
}

export default function NavSection({
  navConfig,
  ...others
}: {
  navConfig: Array<PropsSideBarConfig>;
}) {
  const { pathname } = useLocation();

  const match = (path?: string) => {
    return path ? path === pathname : false;
  };

  return (
    <>
      {navConfig.map((item) => (
        <ListItem
          {...others}
          key={generateUniqKey()}
          active={match}
          item={item}
        />
      ))}
    </>
  );
}
