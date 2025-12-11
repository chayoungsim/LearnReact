// src/api/newsApi.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;
const BASE_URL = "https://newsapi.org/v2";

// API 키 확인
if (!API_KEY) {
  console.error("VITE_NEWSAPI_KEY가 설정되지 않았습니다.");
}

// 카테고리별 뉴스 가져오기
export const fetchNewsByCategory = async (category = "general") => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: "kr",
        category,
        apiKey: API_KEY,
      },
    });

    // API 응답 상태 확인
    if (response.data.status === "error") {
      throw new Error(response.data.message || "API 오류가 발생했습니다.");
    }

    // articles 배열 확인
    if (!response.data.articles || !Array.isArray(response.data.articles)) {
      console.warn("뉴스 데이터가 올바르지 않습니다.");
      return [];
    }

    return response.data.articles;
  } catch (error) {
    console.error("카테고리별 뉴스 조회 오류:", error.message);
    
    // 에러 타입별 처리
    if (error.response) {
      // API가 오류 응답을 반환한 경우
      console.error("API 응답 오류:", error.response.data);
    } else if (error.request) {
      // 요청은 보냈지만 응답을 받지 못한 경우
      console.error("네트워크 오류: 응답 없음");
    }
    
    throw error; // 또는 빈 배열 반환: return [];
  }
};

// 검색어로 뉴스 가져오기
export const fetchNewsByKeyword = async (keyword) => {
  if (!keyword || keyword.trim() === "") {
    console.warn("검색어가 비어있습니다.");
    return [];
  }

  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: keyword,
        language: "ko", // 한국어 결과 우선
        sortBy: "publishedAt", // 최신순 정렬
        apiKey: API_KEY,
      },
    });

    // API 응답 상태 확인
    if (response.data.status === "error") {
      throw new Error(response.data.message || "API 오류가 발생했습니다.");
    }

    // articles 배열 확인
    if (!response.data.articles || !Array.isArray(response.data.articles)) {
      console.warn("검색 결과가 올바르지 않습니다.");
      return [];
    }

    return response.data.articles;
  } catch (error) {
    console.error("키워드 검색 오류:", error.message);
    
    if (error.response) {
      console.error("API 응답 오류:", error.response.data);
    } else if (error.request) {
      console.error("네트워크 오류: 응답 없음");
    }
    
    throw error; // 또는 빈 배열 반환: return [];
  }
};