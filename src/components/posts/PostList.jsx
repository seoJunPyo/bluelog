import React from 'react';
import { ActionIcon, Flex, Pagination, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { BsArrowRepeat } from 'react-icons/bs';
import { PageController, PostBar } from '.';
import SkeletonBar from './SkeletonBar';
import { useGetPostsQuery } from '../../services/postsApi';
import useUser from '../../hooks/useUser';

const ListTitle = () => (
  <Title c="var(--font-color)" mb="lg">
    글 목록
  </Title>
);

const SkeletonList = () => (
  <>
    <ListTitle />
    {Array.from({ length: 10 }, (_, idx) => (
      <SkeletonBar key={idx} />
    ))}
  </>
);

const PostList = ({ path, page, keyword }) => {
  const navigate = useNavigate();
  const { user } = useUser();

  const { data, isLoading, refetch } = useGetPostsQuery({ page: page - 1, tag: keyword ?? '' });

  if (isLoading) return <SkeletonList />;

  return (
    <>
      <Flex justify="space-between" align="center">
        <ListTitle />
        <Flex>
          <ActionIcon onClick={refetch} fz="20px" size="xl" radius="xl">
            <BsArrowRepeat />
          </ActionIcon>
          <PageController
            page={page}
            onNext={() => navigate(`${path}/${page + 1}`)}
            onPrev={() => navigate(`${path}/${page - 1}`)}
            hasNext={page > data.totalPage}
            hasPrev={page !== 1}
          />
        </Flex>
      </Flex>
      {data.posts.map(({ objectID, title, tagList, content, thumbnail, name, createAt, like, commentCount }) => (
        <PostBar
          id={objectID}
          toPost={`/post/${objectID}`}
          key={objectID}
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
      <Pagination
        mt="lg"
        position="center"
        siblings={2}
        total={data.totalPage}
        value={page}
        onChange={page => navigate(`${path}/${page}`)}
        sx={{
          button: {
            background: 'var(--input-bg-color)',
            border: '1px solid var(--hover-bg-color)',
            color: 'var(--content-font-color)',
          },

          '.mantine-1n8gmw6[data-active]': {
            background: 'var(--page-button-color)',
          },
        }}
      />
    </>
  );
};

export default PostList;
