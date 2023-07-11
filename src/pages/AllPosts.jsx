import { Container, Stack, Title } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PopularPosts, PostList } from '../components';

const AllPosts = () => {
  const { page = 1 } = useParams();
  const path = '/posts/all';

  return (
    <>
      <Container my="24px" size="xl">
        <Title c="var(--font-color)">인기 글 목록</Title>
        <PopularPosts />
      </Container>

      <Container my="50px" p="lg" size="xl">
        <Stack spacing="xl">
          <PostList path={path} page={page * 1} />
        </Stack>
      </Container>
    </>
  );
};

export default AllPosts;
