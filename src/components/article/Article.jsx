import React from 'react'
import './article.css';

// imgUrl come from blog using props blog article
// title and date are used props from the  blog.js
const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gpt4__blog-container_article'>
      <div className='gpt4__blog-container_article-image'>
        <img src={imgUrl} alt='blog_Image' />
      </div>
      <div className='gpt4__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div> 
    </div>
  )
}

export default Article
