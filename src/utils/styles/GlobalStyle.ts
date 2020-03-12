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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
`;

export default GlobalStyle;
