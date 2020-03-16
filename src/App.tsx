import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from 'components/Header';

const App = () => (
  <Router>
    <Layout>
      <Header />
      <div>Test</div>
    </Layout>
  </Router>
);

export default App;
