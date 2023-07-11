import React from 'react';
import { Container, Flex, Loader, Text } from '@mantine/core';
import { Navigate, Outlet } from 'react-router-dom';
import useUser from '../../hooks/useUser';

const AuthGuard = ({ element }) => {
  const { user, isLoading, initUser } = useUser();

  React.useEffect(initUser, []);

  if (!user || isLoading)
    return (
      <Container size="xl" my="56px" c="var(--content-font-color)">
        <Flex gap="16px" justify="center" align="center" direction="column">
          <Text fz="24px">유저 정보를 불러오는 중입니다.</Text>
          <Loader />
        </Flex>
      </Container>
    );

  return <>{user ? element ?? <Outlet /> : <Navigate to="/login" />}</>;
};

export default AuthGuard;
