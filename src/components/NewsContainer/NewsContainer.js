import React from 'react';

import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'


const NewsContainer = (props) => {

  const articles = props.articles.map(article => {
    return <NewsArticle article={article} key={article.id} />
  });


  return (
    <div>
      {articles}
    </div>
  )
}

export default NewsContainer;
