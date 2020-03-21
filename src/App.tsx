import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import Header from 'components/Header';

const App = () => (
  <Router>
    <Header />
    <div>Test</div>
  </Router>
);

export default App;
