import { Avatar, Box, Flex, Text } from '@mantine/core';
import React from 'react';

const AvatarProfile = ({ name, createAt }) => (
  <Flex
    gap="12px"
    align="center"
    sx={{
      flexShrink: 0,
    }}>
    <Avatar radius="xl" />
    <Box>
      <Text>{name}</Text>
      <Text fz="12px">{createAt}</Text>
    </Box>
  </Flex>
);

export default AvatarProfile;
