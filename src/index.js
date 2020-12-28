import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './components/App/App';
import NewsContext from "./context/newsContext";

if (process.env.NODE_ENV !== 'production') {
    import('react-axe').then(axe => {
      axe.default(React, ReactDOM, 1000);
      ReactDOM.render(<Router><NewsContext><App /></NewsContext></Router>, document.getElementById('root'));
    });
  } else {
    ReactDOM.render(<Router><NewsContext><App /></NewsContext></Router>, document.getElementById('root'));
  }