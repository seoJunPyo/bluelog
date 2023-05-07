import React from 'react';
import { Container, Text, Title } from '@mantine/core';
import { BadgeBox, SearchInput } from '../components';

const Main = () => (
  <Container
    c="var(--font-color)"
    sx={{
      textAlign: 'center',
      transform: 'translateY(100%)',
    }}>
    <Title fz="64px">BLUELOG</Title>
    <Text fz="24px">관심있는 주제를 검색하거나 태그를 선택해주세요!</Text>
    <SearchInput />
    <BadgeBox />
  </Container>
);

export default Main;
