import React from 'react'

const API_KEY = "5a83fe8234fc03d79b5d319320864273";
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async(lat, lon) => {
  try { 
    const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`);
    if(!response.ok){
        throw new Error('날씨 정보를 불러오는데 실패했습니다.')
    }
    const data = await response.json();
    return data;

  } catch(error){
    console.error("날씨 API 호출 중 오류 발생:", error);
    throw error;
  }
}

