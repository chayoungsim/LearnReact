import React from 'react'

const NewsItem = ({article, onClick}) => {
  const { title, description, image_url, url, source, publishedAt } = article;
  return (
    <article className='new-item'>
      <div className='photo' onClick={onClick}>{image_url && <img src={image_url} alt={title} />}</div>
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