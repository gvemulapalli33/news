import React, {useContext, useEffect} from 'react';
import './App.css';
import local from '../../data/local';
import Menu from "../Menu/Menu";
import NewsContainer from "../NewsContainer/NewsContainer";
import {newsContext} from "../../context/newsContext";

function App() {
    const {setLocalNews} = useContext(newsContext)
    useEffect(() => {
      setLocalNews(local);
    }, []);
    return (
      <div className="app">
          <Menu />
          <NewsContainer />
      </div>
    );
}

export default App;
