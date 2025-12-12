
const NewsItem = ({article}) => {
  const { title, description, url, image_url} = article;
  return (
    <article className='news-item'>       
        {image_url && (                
        <a href={url} target="_blank" rel="noopener noreferrer" className='photo'>
            <img src={image_url} alt="thumbnail" />
        </a>
        )}
        <div className="contents"> 
            <h2>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h2>            
            <p>{description}</p>
        </div>
    </article>
  )
}

export default NewsItem