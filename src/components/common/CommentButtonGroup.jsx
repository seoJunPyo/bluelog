import { Flex } from '@mantine/core';
import React from 'react';
import FillButton from './FillButton';
import OutLineButton from './OutLineButton';
import LikeButton from './LikeButton';

const CommentButtonGroup = ({
  isAuthor,
  edit,
  likeChecked,
  likeCount,
  onClickConfirm,
  onClickEdit,
  onClickRemove,
  onClickLike,
}) => (
  <Flex align="center" gap="sm">
    {isAuthor &&
      (edit ? (
        <FillButton size="xs" label="확인" onClick={onClickConfirm} />
      ) : (
        <OutLineButton size="xs" label="수정" onClick={onClickEdit} />
      ))}
    {isAuthor && <OutLineButton size="xs" label="삭제" onClick={onClickRemove} />}
    <LikeButton size="lg" gap="4px" checked={likeChecked} count={likeCount} onClick={onClickLike} />
  </Flex>
);

export default CommentButtonGroup;
