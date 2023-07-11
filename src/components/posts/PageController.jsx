import { ActionIcon, Flex, Text } from '@mantine/core';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PageController = ({ page, onPrev, onNext, hasNext, hasPrev }) => (
  <Flex
    c="var(--content-font-color)"
    align="center"
    sx={{
      button: {
        fontSize: '20px',
      },
      '.mantine-rc1smp:disabled': {
        background: 'none',
        border: 'none',
        opacity: '0.1',
      },
    }}>
    <ActionIcon size="xl" onClick={onPrev} disabled={!hasPrev} radius="xl">
      <IoIosArrowBack />
    </ActionIcon>
    <Text fz="20px" w="48px" align="center">
      {page}
    </Text>
    <ActionIcon size="xl" onClick={onNext} disabled={!hasNext} radius="xl">
      <IoIosArrowForward />
    </ActionIcon>
  </Flex>
);

export default PageController;
