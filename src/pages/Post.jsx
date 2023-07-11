import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mantine/core';
import { CommentSection, PostDetail, PostFooter, PostSkeleton } from '../components';
import { useGetPostQuery } from '../services/postApi';
import useUser from '../hooks/useUser';

const Post = () => {
  const { postId } = useParams();
  const { data: post, isLoading } = useGetPostQuery({ postId });
  const { user } = useUser();

  return (
    <Box mb="100px">
      {isLoading ? <PostSkeleton /> : <PostDetail post={post} user={user} />}
      <CommentSection postId={postId} user={user} />
      <PostFooter post={post} user={user} isLoading={isLoading} />
    </Box>
  );
};

export default Post;
