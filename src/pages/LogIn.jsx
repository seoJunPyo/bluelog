import React from 'react';
import { Container, Title } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { InputWrapperCard } from '../components';

const SignIn = () => (
  <Container my="15rem">
    <InputWrapperCard>
      <Title mb="md">Log In</Title>
      <Outlet />
    </InputWrapperCard>
  </Container>
);

export default SignIn;
