import { css } from '@emotion/react';
import '../fonts/font.css';

const globalStyle = css`
  :root {
    --color-black1: #3b3b3b;
    --color-black2: #2b2b2b;
    --color-white2: #ffffff;
    --color-white1: #f8f9fa;
    --color-blue1: #00d6fa;
    --color-blue2: #00a1e9;
    --color-blue3: #1288f8;
    --color-blue4: #00365c;
    --color-sky1: #7cd0ff;
    --color-sky2: #2a425b;
    --color-yellow1: #f3e94a;
    --color-yellow2: #bc6f0e;
    --color-red1: #ff0000;
    --color-red2: #920008;
    --color-gray: #adb5bd;
    --box-shadow: 4px 4px 12px 2px rgba(0, 0, 0, 0.2);
    --inset-box-shadow: inset 4px 4px 12px 2px rgba(0, 0, 0, 0.2);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *:not(input) {
    font-family: 'blueArchive' !important;
  }

  body {
    font-family: 'blueArchive' !important;
    background-color: var(--body-bg-color);
  }

  body[data-theme='light'] {
    --body-bg-color: var(--color-white1);
    --input-bg-color: var(--color-white2);
    --border-color: var(--color-sky2);
    --font-color: var(--color-sky2);
    --content-font-color: var(--color-black2);
    --badge-font-color: var(--color-white1);
    --error-color: var(--color-red2);
    --hover-bg-color: rgba(0, 0, 0, 0.1);
    --page-button-color: var(--color-sky2);
  }

  body[data-theme='dark'] {
    --body-bg-color: var(--color-black2);
    --input-bg-color: var(--color-black1);
    --border-color: var(--color-sky1);
    --font-color: var(--color-sky1);
    --badge-font-color: var(--color-black2);
    --content-font-color: var(--color-white1);
    --error-color: var(--color-red1);
    --hover-bg-color: rgba(255, 255, 255, 0.1);
    --page-button-color: var(--color-blue2);
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    :hover {
      background-color: var(--hover-bg-color) !important;
    }
  }

  input {
    color: var(--content-font-color) !important;
    background: var(--input-bg-color) !important;
  }

  p {
    margin: 0.5rem 0;
  }
`;

export default globalStyle;
