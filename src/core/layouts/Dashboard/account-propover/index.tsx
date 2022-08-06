import React, { useRef, useState } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { icons } from 'core/assets';

import { Box, MenuItem, IconButton } from '@mui/material';
// components

import { MenuPopover } from 'core/components';
import { useSession } from 'views/auth/hooks';

export interface PropsMenuOptions {
  label: string;
  icon: React.FC;
  onClick?: () => void;
  to: string;
}

export default function AccountPopover() {
  const session = useSession();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // ----------------------------------------------------------------------

  const MENU_OPTIONS: Array<PropsMenuOptions> = [
    {
      label: 'Perfil',
      icon: icons.accountCircle,
      to: '/',
    },
  ];

  // ----------------------------------------------------------------------
  return (
    <>
      <IconButton color='inherit' ref={anchorRef} onClick={handleOpen}>
        <icons.accountCircle />
      </IconButton>
      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ sx: { width: 220 } }}
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
            <Box
              component={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <MenuItem
          sx={{ typography: 'body2', py: 1, px: 2.5 }}
          onClick={() => session.signOutUser()}
        >
          <Box
            component={icons.logout}
            sx={{
              mr: 2,
              width: 24,
              height: 24,
            }}
          />
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
