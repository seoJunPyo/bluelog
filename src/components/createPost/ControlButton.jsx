import { Button } from '@mantine/core';
import React from 'react';

const ControlButton = ({ onClick, isActive, icon }, ref) => (
  <Button
    ref={ref ?? { current: null }}
    p={0}
    w="40px"
    h="40px"
    fz="18px"
    onClick={onClick}
    tabIndex={-1}
    sx={{
      color: isActive ? 'var(--color-gray)' : 'var(--font-color)',
      background: isActive ? 'var(--hover-bg-color)' : 'none',
    }}>
    {icon}
  </Button>
);

export default React.forwardRef(ControlButton);
