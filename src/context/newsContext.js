import React, {useState} from 'react';
export const newsContext = React.createContext();

function NewsContext(props) {
    let [news, setNews] = useState([]);

    const setLocalNews = (news) => {
         setNews(news);
    }

    return(
      <newsContext.Provider value={{news, setLocalNews}}>
          {props.children}
      </newsContext.Provider>
    );
}

export default NewsContext;