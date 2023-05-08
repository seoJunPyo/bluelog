import { Card } from '@mantine/core';
import React from 'react';

const InputWrapperCard = ({ children }) => (
  <Card
    top="50%"
    p="32px"
    bg="var( --input-bg-color)"
    radius="20px"
    sx={{
      color: 'var(--font-color)',
      boxShadow: 'var(--box-shadow)',

      '.mantine-TextInput-input': {
        border: '1px solid var(--font-color)',
        borderRadius: '10px',
      },

      '.mantine-PasswordInput-input': {
        border: '1px solid var(--font-color)',
        borderRadius: '10px',
        background: 'var(--input-bg-color)',
      },
    }}>
    {children}
  </Card>
);

export default InputWrapperCard;
