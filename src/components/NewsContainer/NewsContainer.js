import React, {useContext} from 'react';
import './NewsContainer.css'
import {newsContext} from "../../context/newsContext";
import NewsArticle from "../NewsArticle/NewsArticle";
import {useParams} from "react-router-dom";

function NewsContainer() {
    const context = useContext(newsContext);
    let {type} = useParams();
    if (!type) {
        type = "localNews";
    }
    const news = context[`${type}`];
    const newsArticle = news && news.map((newsData) => {
        return <NewsArticle key={newsData.id} {...newsData} />
    });
    return (
      <ul className="newsArticle">{newsArticle}</ul>
    );
}
export default NewsContainer;