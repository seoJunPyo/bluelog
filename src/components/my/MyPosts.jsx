import React from 'react';
import { Flex, Stack } from '@mantine/core';
import { PostBar, SkeletonBar, Select, Observer } from '..';
import useInfinityUserPosts from '../../hooks/useInfinityUserPosts';

const SkeletonList = () => (
  <Stack>
    {Array.from({ length: 10 }, (_, idx) => (
      <SkeletonBar key={idx} />
    ))}
  </Stack>
);

const MyPosts = ({ user }) => {
  const [sort, setSort] = React.useState('desc');
  const [pageSize, setPageSize] = React.useState(5);

  const { posts, isLoading, fetchNextPage, hasNextPage, nextPage, reset } = useInfinityUserPosts({
    email: user.email,
    sort,
    pageSize,
  });

  return (
    <>
      <Flex mb="24px" justify="flex-end" align="center" gap="8px">
        <Select
          w="120px"
          value={pageSize}
          onChange={value => {
            if (value === pageSize) return;

            setPageSize(value);
            reset();
          }}
          data={[
            { value: 5, label: '5개씩' },
            { value: 10, label: '10개씩' },
            { value: 20, label: '20개씩' },
          ]}
        />
        <Select
          w="120px"
          value={sort}
          onChange={value => {
            if (value === sort) return;

            setSort(value);
            reset();
          }}
          data={[
            { value: 'desc', label: '최신 순' },
            { value: 'asc', label: '오래된 순' },
          ]}
        />
      </Flex>
      {isLoading || posts.length === 0 ? (
        <SkeletonList />
      ) : (
        <Stack>
          {posts.map(({ id, title, thumbnail, tagList, content, name, createAt, like, commentCount }) => (
            <PostBar
              id={id}
              toPost={`/post/${id}`}
              key={id}
              title={title}
              thumbnail={thumbnail}
              tagList={tagList}
              content={content}
              name={name}
              createAt={createAt}
              like={like}
              commentCount={commentCount}
              user={user}
            />
          ))}
        </Stack>
      )}
      {hasNextPage && <Observer fetchNextPage={() => fetchNextPage(nextPage)} />}
    </>
  );
};

export default MyPosts;
