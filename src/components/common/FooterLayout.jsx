import { Box, Container } from '@mantine/core';
import React from 'react';

const FooterLayout = ({ children }) => (
  <Box
    bg="var(--body-bg-color)"
    px="xl"
    h="70px"
    w="100%"
    size="xl"
    sx={{
      position: 'fixed',
      bottom: 0,
      boxShadow: '0 -3px 10px rgba(0,0,0,0.2)',
    }}>
    <Container
      size="xl"
      w="100%"
      h="100%"
      c="var(--font-color)"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {children}
    </Container>
  </Box>
);

export default FooterLayout;
