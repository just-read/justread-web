import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
  }

  body {
    margin: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
`;

export default GlobalStyle;
