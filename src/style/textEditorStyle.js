import { css } from '@emotion/react';

const textEditorStyle = css`
  .ProseMirror-focused {
    outline: none;
  }

  .ProseMirror {
    padding: 24px 12px;
    color: var(--content-font-color);
    font-size: 20px;
    line-height: 1.5;

    h1,
    h2,
    h3,
    h4 {
      margin: 12px 0;
    }

    p.is-editor-empty:first-of-type::before {
      color: #adb5bd;
      content: attr(data-placeholder);
      float: left;
      height: 0;
      pointer-events: none;
    }

    img {
      max-width: 50%;
    }

    blockquote: {
      border-left: 3px solid var(--font-color);
      padding-left: 1rem;
    }

    pre {
      background: #202020;
      border-radius: 0.5rem;
      color: #fff;
      padding: 0.75rem 1rem;
      line-height: 1.2;
      margin: 12px 0;
    }

    code {
      background: #202020;
      color: inherit;
      font-size: 1rem;
      padding: 0.5rem;
      color: #f98181;
      border-radius: 0.5rem;
    }

    code,
    code > span {
      font-family: 'JetBrainsMono', monospace !important;
    }

    pre > code {
      color: #fff;
    }

    a {
      color: var(--font-color);

      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    ul {
      list-style: disc;
      padding: 0 0 0 40px;
    }
    ol {
      list-style: decimal;
      padding: 0 0 0 40px;
    }
    li {
      list-style: inherit;
    }
  }

  .hljs-comment,
  .hljs-quote {
    color: #616161;
  }

  .hljs-variable,
  .hljs-template-variable,
  .hljs-attribute,
  .hljs-tag,
  .hljs-name,
  .hljs-regexp,
  .hljs-link,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class {
    color: #f98181;
  }

  .hljs-number,
  .hljs-meta,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-type,
  .hljs-params {
    color: #fbbc88;
  }

  .hljs-string,
  .hljs-symbol,
  .hljs-bullet {
    color: #b9f18d;
  }

  .hljs-title,
  .hljs-section {
    color: #faf594;
  }

  .hljs-keyword,
  .hljs-selector-tag {
    color: #70cff8;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: 700;
  }
`;

export default textEditorStyle;
