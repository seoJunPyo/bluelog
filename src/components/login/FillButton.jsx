import { Button } from '@mantine/core';
import React from 'react';

const FillButton = ({ type, onClick, label, loading }) => (
  <Button
    type={type}
    onClick={onClick}
    miw="75px"
    fz="16px"
    fw="400"
    h="35px"
    loading={loading}
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
