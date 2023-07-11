import React from 'react';
import { Container } from '@mantine/core';
import useUser from '../hooks/useUser';
import { MyProfile, Tabs } from '../components';
import { useGetUserQuery } from '../services/userApi';

const MyBlog = () => {
  const { user } = useUser();
  const { data } = useGetUserQuery({ email: user.email });

  return (
    <Container size="xl" my="56px" c="var(--content-font-color)">
      <MyProfile user={{ ...user, ...data }} />
      <Tabs user={{ ...user, ...data }} />
    </Container>
  );
};

export default MyBlog;
