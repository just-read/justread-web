import React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';
import Home from 'pages/Home';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    overflow: hidden;
  }
`;

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Home></Home>
  </>
);

export default App;
