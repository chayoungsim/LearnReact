import React from 'react'

const NewsItem = ({article, onClick}) => {
  const { title, description, urlToImage, url, source, publishedAt } = article;
  return (
    <article className='new-item' onClick={onClick}>
      <div className='photo'>{urlToImage && <img src={urlToImage} alt={title} />}</div>
      <div className='desc'>
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{source.name} • {new Date(publishedAt).toLocaleString()}</small>
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">원문 보기</a>
        </div>
      </div>
    </article>
  )
}

export default NewsItem