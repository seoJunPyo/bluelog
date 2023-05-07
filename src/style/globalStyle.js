import { css } from '@emotion/react';
import '../fonts/font.css';

const globalStyle = css`
  * {
    font-family: 'blueArchive' !important;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--font-color);
  }

  body {
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
    --color-red1: #920008;

    font-family: 'blueArchive' !important;
    background-color: var(--body-bg-color);
  }

  body[data-theme='light'] {
    --body-bg-color: var(--color-white1);
    --input-bg-color: var(--color-white2);
    --font-color: var(--color-sky2);
    --border-color: var(--color-sky2);
    --hover-bg-color: rgba(0, 0, 0, 0.1);
  }

  body[data-theme='dark'] {
    --body-bg-color: var(--color-black1);
    --input-bg-color: var(--color-black2);
    --font-color: var(--color-sky1);
    --border-color: var(--color-sky2);
    --hover-bg-color: rgba(255, 255, 255, 0.1);
  }

  ul,
  li {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: var(--font-color);
  }

  button {
    :hover {
      background-color: var(--hover-bg-color) !important;
    }
  }
`;

export default globalStyle;
