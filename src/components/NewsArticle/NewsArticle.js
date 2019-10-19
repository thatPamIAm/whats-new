import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {

  const {img, headline, description, url} = props.article;

  return (
    <div>
      <img src={img} alt="Meaningful text" />
      <h2>{headline}</h2>
      <p>{description}</p>
      <a href={url}>Link To Article</a>
    </div>
  )
}


export default NewsArticle;