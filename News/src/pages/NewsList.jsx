
import NewsItem from '../components/NewsItem'

const NewsList = ({news, onNewsClick}) => {      
  return (
    <section className='news-items'>
      {
        news.map((article,index) =>(
          <NewsItem article={article} key={index} onClick={() => onNewsClick(article)} />
        ))
      }
      
    </section>
  )
}

export default NewsList