import React from 'react'
import axios from 'axios';

const KEY = import.meta.env.VITE_NEWSAPI_KEY;
const BASE = 'https://newsapi.org/v2';

const api = axios.create({
    baseURL : BASE,
    headers: {
    'X-Api-Key': KEY
  },
  timeout: 10000
})


export const fetchTopHeadlines = async (category = 'general', page = 1, pageSize = 20) => {
  const params = {
    country: 'kr',
    category,
    page,
    pageSize
  };
  const res = await api.get('/top-headlines', { params });
  return res.data; // { status, totalResults, articles: [...] }
};

export const searchArticles = async (q, page = 1, pageSize = 20) => {
  const params = { q, page, pageSize, language: 'ko' };
  const res = await api.get('/everything', { params });
  return res.data;
};

export default api