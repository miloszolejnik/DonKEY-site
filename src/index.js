import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./GlobalStyles"
import App from './App';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </Router>
  , document.getElementById('root')
);
