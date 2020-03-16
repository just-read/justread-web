import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from 'components/Header';

const App = () => {
  return (
    <Layout>
      <Header />
      <Router>
        <div>Test</div>
      </Router>
    </Layout>
  );
};

export default App;
