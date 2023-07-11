import React from 'react';
import { EditorContent } from '@tiptap/react';
import { Box } from '@mantine/core';
import { ControlBar } from '.';

const TextEditor = ({ editor }) => (
  <Box mih="600px">
    {editor && <ControlBar editor={editor} />}
    <EditorContent editor={editor} />
  </Box>
);

export default TextEditor;
