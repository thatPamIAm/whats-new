import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  
  const {img, headline, description, url} = props.article;



  return (
    <div className="article-container">
      <img style={{ backgroundImage : `url(${img})` }} />
      <h2>{headline}</h2>
      <p>{description}</p>
      <a href={url}>Link To article</a>
    </div>
  )
}


export default NewsArticle;