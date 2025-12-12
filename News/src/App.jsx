
import { useState, useEffect } from 'react'
import './App.css'
import NewsList from './pages/NewsList'
import NewsDetail from './pages/NewsDetail'
import axios from 'axios'

const API_KEY = 'QWP9opZXfHIYNzdJbIwbAbFyXMcjVNy9yEydMK4M';

const categories = [
  { id: 'general', label: '일반', icon: '📰' },
  { id: 'business', label: '비즈니스', icon: '💼' },
  { id: 'entertainment', label: '엔터테인먼트', icon: '🎬' },
  { id: 'sports', label: '스포츠', icon: '⚽' }, 
];

 
function App() {
  //const [category, setCategory] = useState('general');
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [currentPage, setCurrentPage] = useState('list'); // 'list' or 'detail'
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);    


    useEffect(() => {
      fetchNews(selectedCategory);
    }, [selectedCategory]);

    const fetchNews = async(category) => {
      const url = `https://api.thenewsapi.com/v1/news/top`;
      const params = {      
        api_token: API_KEY,
        categories: category,
        locale: 'us',
        limit: 20,       
      };
      setLoading(true);
      setError(null);
      try {
        const res =  await axios.get(url, { params });
        setNews(res.data.data)
      } catch(err) {
        console.error("뉴스를 불러오는데 실패했습니다.", err)
      }      
      setLoading(false);
    }
    
    const handleNewsClick = (article) => {
      setSelectedArticle(article);
      setCurrentPage('detail');
    };

    const handleBackToList = () => {
      setCurrentPage('list');
      setSelectedArticle(null);
    };

     // 페이지 라우팅
  if (currentPage === 'detail' && selectedArticle) {
    return <NewsDetail article={selectedArticle} onBack={handleBackToList} />;
  }

  return (
    <>
      <nav>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </nav>
      {loading && <p>로딩중 ...</p>}
      <NewsList news={news} onNewsClick={handleNewsClick} />
    </>
  )
}

export default App
