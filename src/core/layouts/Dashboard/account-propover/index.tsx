import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  MenuItem,
  IconButton,
  Menu,
  ListItemIcon,
  Divider,
} from '@mui/material';

import Icons from 'core/components/icons/getIcons';
import { destroySession } from 'core/services/storage';

export interface PropsMenuOptions {
  label: string;
  icon: React.ReactElement;
  onClick?: () => void;
  to: string;
}

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function click() {
    destroySession();
  }

  const MENU_OPTIONS: Array<PropsMenuOptions> = [
    {
      label: 'Perfil',
      icon: <Icons name='User' size='22' />,
      to: '/',
    },
  ];

  return (
    <>
      <IconButton color='inherit' ref={anchorRef} onClick={handleOpen}>
        <Icons name='ProfileCircle' size='38' />
      </IconButton>
      <Menu
        open={open}
        sx={{ sx: { width: 220 } }}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        onClick={handleClose}
      >
        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            component={RouterLink}
            onClick={() => {
              handleClose();
              if (option?.onClick) option.onClick();
            }}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
            {...option}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            {option.label}
          </MenuItem>
        ))}

        <Divider />

        <MenuItem
          onClick={() => {
            handleClose();
            click();
          }}
          sx={{ typography: 'body2', py: 1, px: 2.5 }}
        >
          <ListItemIcon>
            <Icons name='Logout' size='22' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
