import React from 'react';
import { Container, Stack, Title } from '@mantine/core';
import {
  useEditCommentMutation,
  useGetCommentCountQuery,
  useGetCommentsQuery,
  useRemoveCommentMutation,
  useToggleLikeCommentMutation,
} from '../../services/commentsApi';
import { Comment, CommentInput } from '.';
import formatElapsedDate from '../../util/formatElapsedDate';
import useToast from '../../hooks/useToast';

const CommentSection = ({ postId, user }) => {
  const { data: comments } = useGetCommentsQuery({ postId });
  const { data: commentCount } = useGetCommentCountQuery({ postId });

  const [removeComment] = useRemoveCommentMutation();
  const [toggleLikeComment] = useToggleLikeCommentMutation();
  const [editComment] = useEditCommentMutation();

  const toast = useToast();

  return (
    <Container size="xl" px="48px">
      <Title order={2} c="var(--font-color)" mb="24px">
        댓글 {commentCount}
      </Title>
      <CommentInput postId={postId} user={user} />
      <Stack mt="56px" c="var(--content-font-color)">
        {comments?.map(({ id, name, email, like, createAt, content }) => (
          <Comment
            key={id}
            commentId={id}
            name={name}
            content={content}
            isAuthor={user?.email === email}
            createAt={formatElapsedDate(createAt)}
            likeCount={like.length}
            likeChecked={like.includes(user?.email)}
            toggleLikeComment={() => {
              if (!user) {
                toast.error({ title: '로그인 후 사용해 주세요.' });
                return;
              }

              toggleLikeComment({ postId, commentId: id, checked: like.includes(user.email), email });
            }}
            editComment={content => editComment({ postId, commentId: id, content })}
            removeComment={() => removeComment({ postId, commentId: id })}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default CommentSection;
