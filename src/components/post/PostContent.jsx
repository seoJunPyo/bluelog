import React from 'react';
import { EditorContent } from '@tiptap/react';
import useTextEditor from '../../hooks/useTextEditor';

const PostContent = ({ content }) => {
  const editor = useTextEditor({ content, editable: false });

  React.useEffect(() => {
    editor?.commands.setContent(content);
  }, [content, editor]);

  return <EditorContent editor={editor} />;
};

export default PostContent;
