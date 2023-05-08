import React from 'react';
import { Card, Container, Title } from '@mantine/core';
import { Outlet } from 'react-router-dom';

const SignIn = () => (
  <Container sx={{ transform: 'translateY(100%)' }}>
    <Card
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
      <Title mb="md">Log In</Title>
      <Outlet />
    </Card>
  </Container>
);

export default SignIn;
