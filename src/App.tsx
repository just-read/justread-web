import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';
import Header from 'components/Header';
import BookList from 'pages/BookList';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    overflow: hidden;
  }
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <Header />
    <BookList></BookList>
  </Router>
);

export default App;
