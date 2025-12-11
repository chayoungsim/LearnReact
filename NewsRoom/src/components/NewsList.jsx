import { useEffect, useState } from 'react'
import { fetchNewsByCategory } from "../api/newsApi";
import NewsItem from './NewsItem'


const NewsList = ({category}) => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNewsByCategory(category);
      setArticles(data);
    };
    loadNews();
  },[category]) 
  
  return (
    <section>
      {articles.length === 0 && <p>뉴스를 불러오는 중...</p>}
      {articles.map((article, idx) => (
        <NewsItem key={idx} article={article} />
      ))}
    </section>
  )
}

export default NewsList