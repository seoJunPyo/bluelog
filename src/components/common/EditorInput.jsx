import { Box } from '@mantine/core';
import { EditorContent } from '@tiptap/react';
import React from 'react';

const EditorInput = ({ editor }) => (
  <Box
    w="100%"
    sx={{
      '.ProseMirror': {
        background: 'var(--input-bg-color)',
        padding: '12px 16px',
        borderRadius: '10px',
        border: '1px solid var(--hover-bg-color)',

        ':focus': {
          border: '1px solid var(--font-color)',
        },
      },
    }}>
    <EditorContent editor={editor} width="100%" />
  </Box>
);

export default EditorInput;
