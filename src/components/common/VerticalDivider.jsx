import { Text } from '@mantine/core';
import React from 'react';

const VerticalDivider = () => (
  <Text
    sx={{
      width: '1px',
      height: '1rem',
      marginLeft: '0.5rem',
      marginRight: '0.5rem',
      background: 'var(--color-gray)',
    }}
  />
);

export default VerticalDivider;
