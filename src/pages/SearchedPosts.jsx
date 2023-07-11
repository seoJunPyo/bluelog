import { Container, Stack, Title } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PostList } from '../components';

const Posts = () => {
  const { page, keyword } = useParams();
  const path = `/posts/search/${keyword}/${page}`;

  return (
    <>
      <Container my="50px" p="lg" size="xl">
        <Title
          align="center"
          mb="32px"
          c="var(--content-font-color)"
          sx={{
            span: {
              fontSize: '60px',
              color: 'var(--font-color)',
            },
          }}>
          <span>{keyword}</span> 로 찾은 글
        </Title>
        <Stack spacing="xl">
          <PostList path={path} page={page * 1} keyword={keyword} />
        </Stack>
      </Container>
    </>
  );
};

export default Posts;
