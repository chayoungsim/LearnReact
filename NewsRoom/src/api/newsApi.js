// src/api/newsApi.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_THENEWS_API_KEY || ''

// API 키 확인
if (!API_KEY) {
  console.error("VITE_NEWSAPI_KEY가 설정되지 않았습니다.");
}

const api = axios.create({
  baseURL: 'https://api.thenewsapi.com/v1',
  timeout: 10000
})

// 카테고리별 뉴스 가져오기
export const getTopNewsByCategory = async (category = "general", limit = 3) => {
    const res = await api.get('/news/top', {
      params: {
        api_token: API_KEY,
        categories: category,
        locale: 'kr',
        limit
      },
    });
    // API 응답 상태 확인
    if (res && res.data) {
       return res.data.data || res.data
    }
    throw new Error('No data') 
};

export default api