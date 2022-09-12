import React from 'react';
import { Box, InputProps } from '@mui/material';

interface PropsImage extends Pick<InputProps, 'sx'> {
  src: string;
}
export default function Image({ sx, src }: PropsImage) {
  return (
    <Box component='img' src={src} sx={{ width: 40, height: 40, ...sx }} />
  );
}
