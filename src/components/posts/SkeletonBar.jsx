import React from 'react';
import { Flex, Group, Loader, Stack } from '@mantine/core';
import BarLayOut from './BarLayOut';
import { Skeleton } from '../common';

const SkeletonBar = () => (
  <BarLayOut image={<Loader color="gray" size="md" variant="dots" />}>
    <Flex w="70%" p="20px" direction="column" justify="space-between">
      <Stack w="80%" spacing="sm">
        <Skeleton height={32} radius="xl" />
        <Flex gap="8px">
          <Skeleton width={60} height={20} radius="xl" />
          <Skeleton width={60} height={20} radius="xl" />
          <Skeleton width={60} height={20} radius="xl" />
        </Flex>
      </Stack>

      <Flex align="center" gap="8px">
        <Skeleton height={28} circle />
        <Skeleton width={160} height={24} radius="xl" />
      </Flex>
    </Flex>

    <Group w="10%" miw="120px" p="20px 20px 0 0" sx={{ alignSelf: 'flex-start', flexShrink: 0 }}>
      <Skeleton height={24} radius="xl" />
    </Group>
  </BarLayOut>
);

export default SkeletonBar;
