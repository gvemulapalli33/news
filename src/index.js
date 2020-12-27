import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import NewsContext from "./context/newsContext";

ReactDOM.render(<NewsContext><App /></NewsContext>, document.getElementById('root'));