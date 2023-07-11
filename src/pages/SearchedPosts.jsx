import { Container, Stack, Title } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PopularPosts, PostList } from '../components';

const Posts = () => {
  const { page, keyword } = useParams();
  const path = `/posts/search/${keyword}/${page}`;

  return (
    <>
      <Container my="24px" size="xl">
        <Title c="var(--font-color)">인기 글 목록</Title>
        <PopularPosts keyword={keyword} />
      </Container>

      <Container my="50px" p="lg" size="xl">
        <Stack spacing="xl">
          <PostList path={path} page={page * 1} keyword={keyword} />
        </Stack>
      </Container>
    </>
  );
};

export default Posts;
