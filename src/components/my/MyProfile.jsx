import { Avatar, Box, Container, Flex, Text, Title } from '@mantine/core';
import React from 'react';

const Profile = ({ user: { displayName, introduce } }) => (
  <Container
    size="sm"
    p="lg"
    sx={{
      borderBottom: '1px solid var(--hover-bg-color)',
    }}>
    <Flex gap="16px" align="center">
      <Avatar size="xl" radius="100%" />
      <Box>
        <Title c="var(--font-color)">{displayName}</Title>
        {introduce ? <Text lineClamp={2}>{introduce}</Text> : <Text opacity={0.5}>자기소개가 없습니다. </Text>}
      </Box>
    </Flex>
  </Container>
);

export default Profile;
