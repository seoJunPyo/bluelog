import React from 'react';
import { Box, Flex } from '@mantine/core';
import { Profile, TextEditorContent, CommentButtonGroup } from '..';
import useTextEditor from '../../hooks/useTextEditor';

const Reply = ({
  name,
  createAt,
  content,
  isAuthor,
  likeCount,
  likeChecked,
  editReply,
  toggleLikeReply,
  removeReply,
}) => {
  const [edit, setEdit] = React.useState(false);
  const editor = useTextEditor({ content, editable: false });

  const handleClickEdit = () => {
    setEdit(true);
    editor.setEditable(true);
    editor.commands.focus('end');
  };

  const handleClickConfirm = () => {
    if (editor.getText().trim() === '') return;

    editReply(editor.getHTML());
    setEdit(false);
    editor.setEditable(false);
  };

  return (
    <Box>
      <Flex justify="space-between">
        <Profile name={name} createAt={createAt} />
        <CommentButtonGroup
          edit={edit}
          isAuthor={isAuthor}
          likeCount={likeCount}
          likeChecked={likeChecked}
          onClickEdit={handleClickEdit}
          onClickConfirm={handleClickConfirm}
          onClickLike={toggleLikeReply}
          onClickRemove={removeReply}
        />
      </Flex>
      <TextEditorContent edit={edit} editor={editor} />
    </Box>
  );
};

export default Reply;
