import React, {useContext} from 'react';
import './NewsContainer.css'
import {newsContext} from "../../context/newsContext";
import NewsArticle from "../NewsArticle/NewsArticle";

function NewsContainer() {
    const {news} = useContext(newsContext);
    const newsArticle = news.map((newsData) => {
        return <NewsArticle key={newsData.id} {...newsData} />
    });
    return (
      <ul className="newsArticle">{newsArticle}</ul>
    );
}
export default NewsContainer;