
import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import NewsDetail from './pages/NewsDetail';

function App() { 

  return (
    <BrowserRouter>
      <Categories />
      <Routes>
        <Route path="/" element={<Navigate to="/category/general" />} />
        <Route path="/category/:category" element={<NewsListWrapper />} />
        <Route path="/news-detail" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

import { useParams } from "react-router-dom";
const NewsListWrapper = () => {
  const { category } = useParams();
  return <NewsList category={category} />;
};

export default App
