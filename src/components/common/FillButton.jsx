import { Button } from '@mantine/core';
import React from 'react';

const FillButton = ({ radius, type, onClick, label, loading, size, disabled }) => (
  <Button
    radius={radius}
    type={type}
    onClick={onClick}
    fw="400"
    loading={loading}
    disabled={disabled}
    size={size}
    sx={{
      background: 'var(--color-blue2)',
      ':hover': {
        background: 'var(--color-blue3) !important',
        transition: 'background 0.2s',
      },
    }}>
    {label}
  </Button>
);

export default FillButton;
