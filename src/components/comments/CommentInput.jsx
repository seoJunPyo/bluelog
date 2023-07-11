import { Flex } from '@mantine/core';
import React from 'react';
import { useCreateCommentMutation } from '../../services/commentsApi';
import { EditorInput, FillButton } from '..';
import useTextEditor from '../../hooks/useTextEditor';
import useToast from '../../hooks/useToast';

const CommentInput = ({ postId, user }) => {
  const [createComment] = useCreateCommentMutation();
  const toast = useToast();
  const editor = useTextEditor({ content: '', placeholder: '댓글을 입력하세요.' });

  const handleClickWrite = () => {
    if (!user) {
      toast.error({ title: '로그인 후 이용해 주세요.' });
      return;
    }

    if (!editor.getText().trim()) {
      toast.error({ title: '댓글을 입력하지 않았습니다.' });
      return;
    }

    createComment({ postId, commentInfo: { content: editor.getHTML() } });
    editor.commands.clearContent();
  };

  return (
    <Flex w="100%" gap="12px" align="end" direction="column">
      <EditorInput editor={editor} />
      <FillButton label="댓글 작성" onClick={handleClickWrite} />
    </Flex>
  );
};

export default CommentInput;
