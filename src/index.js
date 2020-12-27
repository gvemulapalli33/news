import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './components/App/App';
import NewsContext from "./context/newsContext";

ReactDOM.render(<Router><NewsContext><App /></NewsContext></Router>, document.getElementById('root'));