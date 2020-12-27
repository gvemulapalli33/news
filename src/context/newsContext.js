import React, {useState} from 'react';
export const newsContext = React.createContext();

function NewsContext(props) {
    let [localNews, setLocalNews] = useState([]);
    let [healthNews, setHealthNews] = useState([]);
    let [entertainmentNews, setEntertainmentNews] = useState([]);
    let [scienceNews, setScienceNews] = useState([]);
    let [technologyNews, setTechnologyNews] = useState([]);

    const setAllLatestNews = (news) => {
      const {entertainment, health, local, science, technology} = news;
      setEntertainmentNews(entertainment);
      setLocalNews(local);
      setHealthNews(health);
      setTechnologyNews(technology);
      setScienceNews(science);         
    }

    return(
      <newsContext.Provider value={{localNews, entertainmentNews, scienceNews, healthNews, technologyNews, setAllLatestNews}}>
          {props.children}
      </newsContext.Provider>
    );
}

export default NewsContext;