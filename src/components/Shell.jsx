import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppShell, Header, Title, ActionIcon, Box, Flex } from '@mantine/core';
import { BsMoon, BsSun } from 'react-icons/bs';
import useTheme from '../hooks/useTheme';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ActionIcon c="var(--font-color)" size="xl" onClick={toggleTheme}>
      {theme === 'dark' ? <BsMoon size="20px" /> : <BsSun size="20px" />}
    </ActionIcon>
  );
};

const HoverBox = ({ component, children }) => (
  <Box
    p="xs"
    fw={400}
    component={component}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
      ':hover': {
        backgroundColor: 'var(--hover-bg-color)',
      },
    }}>
    {children}
  </Box>
);

const Shell = () => (
  <AppShell
    header={
      <Header
        c="var(--font-color)"
        position="fixed"
        display="flex"
        height="70px"
        px="lg"
        bg="var(--body-bg-color)"
        withBorder={false}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 3px 10px  rgba(0,0,0,0.2)',
        }}>
        <Title fz="36px" fw="600">
          <Link to="/">BLUELOG</Link>
        </Title>
        <Flex fz="20px" fw="600">
          <ThemeButton />
          <HoverBox component={Link}>전체보기</HoverBox>
          <HoverBox component={Link}>Log In</HoverBox>
        </Flex>
      </Header>
    }>
    <Outlet />
  </AppShell>
);

export default Shell;
