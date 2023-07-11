import { Container, Divider, Flex, Stack } from '@mantine/core';
import React from 'react';
import { Skeleton } from '../common';

const PostSkeleton = () => (
  <Container mb="70px" c="var(--content-font-color)" p="48px" size="xl" fz="20px">
    <Stack spacing="xl">
      <Skeleton width="600px" height="60px" />
      <Flex justify="space-between">
        <Skeleton width="300px" height="30px" />
        <Skeleton width="200px" height="30px" />
      </Flex>
    </Stack>
    <Divider my="xl" variant="dotted" />

    <Skeleton width="100%" height="600px" />

    <Divider my="xl" variant="dotted" />

    <Flex gap="8px">
      <Skeleton width="100px" height="30px" radius="2rem" />
      <Skeleton width="100px" height="30px" radius="2rem" />
      <Skeleton width="100px" height="30px" radius="2rem" />
      <Skeleton width="100px" height="30px" radius="2rem" />
    </Flex>
  </Container>
);

export default PostSkeleton;
