import React from 'react';
import { Container, Title } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { InputWrapperCard } from '../components';

const SignUp = () => (
  <Container my="15rem">
    <InputWrapperCard>
      <Title mb="md">Join Us!</Title>
      <Outlet />
    </InputWrapperCard>
  </Container>
);

export default SignUp;
