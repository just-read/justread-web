import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Header from 'components/Header';
import 'antd/dist/antd.css';

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
