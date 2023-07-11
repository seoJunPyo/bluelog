import React from 'react';
import { Flex } from '@mantine/core';
import useTextEditor from '../../hooks/useTextEditor';
import { EditorInput, FillButton } from '../common';
import { useCreateReplyMutation } from '../../services/repliesApi';
import useUser from '../../hooks/useUser';
import useToast from '../../hooks/useToast';

const ReplyEditor = ({ commentId }) => {
  const editor = useTextEditor({ content: '', placeholder: '답글을 입력해주세요.' });
  const toast = useToast();
  const [createReply] = useCreateReplyMutation();
  const { user } = useUser();

  const handleClickWrite = async () => {
    if (editor.getText().trim() === '') {
      toast.error({ title: '답급을 입력해주세요.' });

      return;
    }

    await createReply({
      commentId,
      replyInfo: { email: user.email, name: user.displayName, content: editor.getHTML() },
    });
    editor.commands.clearContent();
  };

  return (
    <Flex w="100%" gap="12px" align="end" direction="column">
      <EditorInput editor={editor} />
      <FillButton label="답글 작성" onClick={handleClickWrite} />
    </Flex>
  );
};

export default ReplyEditor;
