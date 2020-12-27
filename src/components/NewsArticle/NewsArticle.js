import React from 'react';
import './NewsArticle.css';

function NewsArticle({id, headline, img, description, url}) {
   return (
       <li id={id} className="article">
            <img className="newsImage" src={img} alt={headline}/>
            <p className="headLine">{headline}</p>
            <p className="description">{description}</p>
            <a className="newsLink" href={url} rel="noopener noreference"><span className="icon">🔗</span> Link to article </a>
       </li>
   );
}
export default NewsArticle;