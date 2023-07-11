import React from 'react';
import { Flex, Loader } from '@mantine/core';
import { CardLayOut } from '.';
import { Skeleton } from '../common';

const SkeletonCard = () => (
  <CardLayOut image={<Loader color="gray" size="md" variant="dots" />}>
    <Flex p="12px" h="30%" mt="4px" direction="column" gap="12px">
      <Skeleton height={24} radius="xl" />
      <Flex gap="8px">
        <Skeleton width={50} height={20} radius="xl" />
        <Skeleton width={50} height={20} radius="xl" />
        <Skeleton width={50} height={20} radius="xl" />
      </Flex>
    </Flex>
    <Flex px="12px" direction="column">
      <Skeleton width={56} height={16} radius="xl" />
      <Flex h="10%" justify="space-between">
        <Skeleton mt="12px" height={20} radius="xl" />
      </Flex>
    </Flex>
  </CardLayOut>
);

export default SkeletonCard;
