import React from 'react';
import { Loader, Stack } from '@mantine/core';
import {
  useEditReplyMutation,
  useGetRepliesQuery,
  useRemoveReplyMutation,
  useToggleLikeReplyMutation,
} from '../../services/repliesApi';
import { ReplyEditor, Reply } from '.';
import formatElapsedDate from '../../util/formatElapsedDate';
import useUser from '../../hooks/useUser';
import useToast from '../../hooks/useToast';

const Replies = ({ commentId }) => {
  const { user } = useUser();
  const toast = useToast();

  const { data: replies, isLoading } = useGetRepliesQuery({ commentId });
  const [removeReply] = useRemoveReplyMutation();
  const [toggleLikeReply] = useToggleLikeReplyMutation();
  const [editReply] = useEditReplyMutation();

  if (isLoading) return <Loader />;

  return (
    <>
      {replies.map(({ id, content, email, name, createAt, like }) => (
        <Reply
          key={id}
          name={name}
          createAt={formatElapsedDate(createAt)}
          content={content}
          isAuthor={email === user.email}
          likeCount={like.length}
          likeChecked={like.includes(user.email)}
          editReply={content => editReply({ commentId, replyId: id, content })}
          toggleLikeReply={() => {
            if (!user) {
              toast.error({ title: '로그인 후 이용해주세요.' });

              return;
            }

            toggleLikeReply({ commentId, replyId: id, checked: like.includes(user.email), email });
          }}
          removeReply={() => removeReply({ commentId, replyId: id })}
        />
      ))}
    </>
  );
};

export default Replies;
