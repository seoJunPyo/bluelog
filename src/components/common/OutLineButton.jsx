import { Button } from '@mantine/core';
import React from 'react';

const OutLineButton = ({ type, onClick, label, loading, leftIcon, size }) => (
  <Button
    size={size}
    type={type}
    onClick={onClick}
    fw="400"
    loading={loading}
    leftIcon={leftIcon}
    sx={{
      background: 'none',
      border: '1px solid var(--font-color)',
      color: 'var(--font-color)',
      ':hover': {
        background: 'var(--hover-bg-color) !important',
        transition: 'background 0.2s',
      },
    }}>
    {label}
  </Button>
);

export default OutLineButton;
