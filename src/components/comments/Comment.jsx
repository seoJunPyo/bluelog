import { Box, Flex } from '@mantine/core';
import React from 'react';
import { CommentButtonGroup, AvatarProfile, TextEditorContent, RepliesAccordion } from '..';
import useTextEditor from '../../hooks/useTextEditor';

const Comment = ({
  commentId,
  name,
  content,
  isAuthor,
  createAt,
  likeChecked,
  likeCount,
  editComment,
  toggleLikeComment,
  removeComment,
}) => {
  const [edit, setEdit] = React.useState(false);
  const editor = useTextEditor({ content, editable: false });

  const handleClickConfirm = () => {
    if (editor.getText().trim() === '') return;

    editComment(editor.getHTML());

    editor.setEditable(false);
    setEdit(false);
  };

  const handleClickEdit = () => {
    editor.setEditable(true);
    setEdit(true);
    editor.commands.focus('end');
  };

  return (
    <Box
      p="12px"
      sx={{
        borderBottom: '1px solid var(--hover-bg-color)',
      }}>
      <Flex justify="space-between">
        <AvatarProfile name={name} createAt={createAt} />
        <CommentButtonGroup
          edit={edit}
          isAuthor={isAuthor}
          likeChecked={likeChecked}
          likeCount={likeCount}
          onClickConfirm={handleClickConfirm}
          onClickEdit={handleClickEdit}
          onClickLike={toggleLikeComment}
          onClickRemove={removeComment}
        />
      </Flex>
      <TextEditorContent editor={editor} edit={edit} />

      <RepliesAccordion commentId={commentId} />
    </Box>
  );
};

export default Comment;
