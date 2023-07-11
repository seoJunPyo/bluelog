import { useEditor } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Blockquote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import Bold from '@tiptap/extension-bold';
import Code from '@tiptap/extension-code';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Dropcursor from '@tiptap/extension-dropcursor';
import Gapcursor from '@tiptap/extension-gapcursor';
import History from '@tiptap/extension-history';
import Placeholder from '@tiptap/extension-placeholder';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { lowlight } from 'lowlight';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);

const useTextEditor = ({ content = '', placeholder = '', editable = true, option }) => {
  const editor = useEditor({
    editable,
    extensions: [
      Document,
      Paragraph,
      Text,
      Blockquote,
      HardBreak,
      Heading,
      HorizontalRule,
      ListItem,
      OrderedList.configure({
        keepMarks: false,
      }),
      BulletList.configure({
        keepMarks: false,
      }),
      Bold,
      Code,
      Italic,
      Strike,
      Dropcursor,
      Gapcursor,
      History,

      CodeBlockLowlight.configure({
        languageClassPrefix: 'language-',
        lowlight,
        defaultLanguage: 'js',
      }),
      Image.configure({
        inline: true,
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'right', 'center'],
      }),
      Link.configure({
        protocols: ['ftp', 'mailto'],
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    ...option,
  });

  return editor;
};

export default useTextEditor;
