import React, {useContext, useEffect} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Menu from "../Menu/Menu";
import NewsContainer from "../NewsContainer/NewsContainer";
import SearchForm from "../SearchForm/SearchForm";
import {newsContext} from "../../context/newsContext";
import useFetch from "../../hooks/useFetch";
const API = 'https://whats-new-api.herokuapp.com/api/v1/news';
function App() {
    const {setAllLatestNews} = useContext(newsContext);
    const [loading, error, data] = useFetch(API);
    useEffect(() => {
      setAllLatestNews(data);
    }, [data]);
    return (
      <div className="app">
          <SearchForm />
          <Menu />
          <Switch>
            <Route exact path="/">
               {data && <NewsContainer />}
            </Route>
            <Route path="/:type">
               {data && <NewsContainer />}
            </Route>
          </Switch>
      </div>
    );
}

export default App;
