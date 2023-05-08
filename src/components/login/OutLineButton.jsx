import { Button } from '@mantine/core';
import React from 'react';

const OutLineButton = ({ type, onClick, label, loading }) => (
  <Button
    type={type}
    onClick={onClick}
    fz="16px"
    fw="400"
    h="35px"
    loading={loading}
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
