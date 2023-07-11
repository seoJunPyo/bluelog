import React from 'react';
import { ActionIcon, Container, Flex, Header as MantineHeader, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { BsMoon, BsSun } from 'react-icons/bs';

import useTheme from '../hooks/useTheme';
import { LinkHoverBox, UserMenu } from '.';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ActionIcon c="var(--font-color)" size="lg" onClick={toggleTheme}>
      {theme === 'dark' ? <BsMoon size="20px" /> : <BsSun size="20px" />}
    </ActionIcon>
  );
};

const Header = () => (
  <MantineHeader
    c="var(--font-color)"
    position="fixed"
    height="70px"
    px="xl"
    bg="var(--body-bg-color)"
    withBorder={false}
    sx={{ boxShadow: '0 3px 10px rgba(0,0,0,0.2)' }}>
    <Container
      h="100%"
      size="xl"
      display="flex"
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Title fz="36px" fw="600">
        <Link to="/">BLUELOG</Link>
      </Title>
      <Flex fz="20px" fw="600" gap="8px" align="center">
        <ThemeButton />
        <LinkHoverBox to="/posts/all/1">전체보기</LinkHoverBox>
        <UserMenu />
      </Flex>
    </Container>
  </MantineHeader>
);

export default Header;
