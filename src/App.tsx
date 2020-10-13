import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Header from 'components/Header';
import BookList from 'pages/BookList';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    overflow: hidden;
  }
`;
const MainContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <Header />
    <MainContainer>
      <BookList></BookList>
    </MainContainer>
  </Router>
);

export default App;
