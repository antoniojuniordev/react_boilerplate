import { useState } from 'react';
import Input, { InputProps } from 'core/components/form/input';

import { IconButton, InputAdornment } from '@mui/material';
import Icons from 'core/components/icons/getIcons';

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
              {showPassword ? (
                <Icons size='22' name='EyeSlash' />
              ) : (
                <Icons size='22' name='Eye' />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
