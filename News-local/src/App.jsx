
import { useState, useEffect } from 'react'
import './App.css'
import NewsList from './pages/NewsList'
import NewsDetail from './pages/NewsDetail'
import axios from 'axios'

const NEWS_API_KEY = 'aa433b2c32ce4207ae1b4d4c4fd2c1cb';
const API_BASE = 'https://newsapi.org/v2';



const categories = [
  { id: 'general', label: '일반', icon: '📰' },
  { id: 'business', label: '비즈니스', icon: '💼' },
  { id: 'entertainment', label: '엔터테인먼트', icon: '🎬' },
  { id: 'health', label: '건강', icon: '🏥' },
  { id: 'science', label: '과학', icon: '🔬' },
  { id: 'sports', label: '스포츠', icon: '⚽' },
  { id: 'technology', label: '기술', icon: '💻' }
];

 
function App() {
  const [category, setCategory] = useState('general');

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
      const url = `${API_BASE}/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(url)
        setNews(res.data.articles)
      } catch(err) {
        console.error("뉴스를 불러오는데 실패했습니다.", err)
      }      
    }
    
    // useEffect(() => {
    //   fetchNews()
    // },[])

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
      <NewsList news={news} onNewsClick={handleNewsClick} />
    </>
  )
}

export default App
