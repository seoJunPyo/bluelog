import { Box } from '@mantine/core';
import { EditorContent } from '@tiptap/react';
import React from 'react';

const TextEditorContent = ({ editor, edit }) => (
  <Box
    w="100%"
    sx={{
      '.ProseMirror': {
        padding: '12px 16px',
        margin: '12px 0',
        background: edit && 'var(--input-bg-color)',
        border: '1px solid var(--hover-bg-color)',
        borderRadius: '10px',

        ':focus': {
          border: '1px solid var(--font-color)',
        },
      },
    }}>
    <EditorContent editor={editor} />
  </Box>
);

export default TextEditorContent;
