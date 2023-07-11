import { Flex } from '@mantine/core';
import React from 'react';

const FlexBox = ({ children }) => (
  <Flex
    wrap="wrap"
    w="100%"
    gap="sm"
    my="8px"
    p="12px"
    mih="56px"
    bg="var(--body-bg-color)"
    sx={{
      borderRadius: '10px',
    }}>
    {children}
  </Flex>
);

export default FlexBox;
