import React, { useState } from 'react';
import Input, { InputProps } from 'core/components/form/input';
import { Eye, EyeSlash } from 'iconsax-react';

import { IconButton, InputAdornment } from '@mui/material';

export default function InputPassword(props: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((oldState) => !oldState);
  };

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      autoComplete={showPassword ? 'off' : 'current-password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              edge='end'
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
            >
              {showPassword ? <EyeSlash size='22' /> : <Eye size='22' />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
