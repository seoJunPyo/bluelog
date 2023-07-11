/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Container, Flex, Stack } from '@mantine/core';
import useInfinityCategoryPosts from '../../hooks/useInfinityCategoryPosts';
import { PostBar, Observer, Select } from '..';
import useUser from '../../hooks/useUser';

const CategoryPosts = ({ email, category }) => {
  const { user } = useUser();
  const [sort, setSort] = React.useState('desc');

  const { posts, fetchNextPage, hasNextPage, reset } = useInfinityCategoryPosts({ email, category, sort });

  React.useEffect(reset, [category, sort]);

  return (
    <Container my="48px" size="xl">
      <Flex mb="24px" justify="flex-end">
        <Select
          value={sort}
          onChange={setSort}
          w="120px"
          data={[
            { value: 'desc', label: '최신 순' },
            { value: 'asc', label: '오래된 순' },
          ]}
        />
      </Flex>
      <Stack>
        {posts?.map(({ id, title, content, tagList, thumbnail, name, like, createAt, commentCount }) => (
          <PostBar
            key={id}
            toPost={`/post/${id}`}
            title={title}
            content={content}
            tagList={tagList}
            thumbnail={thumbnail}
            name={name}
            like={like}
            createAt={createAt}
            commentCount={commentCount}
            user={user}
          />
        ))}
      </Stack>
      {hasNextPage && <Observer fetchNextPage={fetchNextPage} />}
    </Container>
  );
};

export default CategoryPosts;
