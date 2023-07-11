import { Box, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import TABS_MENU from '../../constant/tabMenu';

const TabMenu = ({ currentTab, setTab }) => (
  <Container mt="56px">
    <Flex justify="center" pos="relative">
      {TABS_MENU.map(({ value, label }) => (
        <Text
          w="160px"
          align="center"
          key={value}
          c={value === currentTab ? 'var(--font-color)' : 'var(--content-font-color)'}
          fz="20px"
          fw={800}
          p="12px"
          onClick={() => setTab(value)}
          sx={{
            cursor: 'pointer',
          }}>
          {label}
        </Text>
      ))}
      <Box
        pos="absolute"
        bottom="0"
        w="160px"
        sx={{
          borderBottom: '1px solid var(--font-color)',
          transition: 'all 0.2s',
          transform: `translate3d(${currentTab === 'all' ? '-100%' : currentTab === 'category' ? '0' : '100%'}, 0, 0)`,
        }}
      />
    </Flex>
  </Container>
);

export default TabMenu;
