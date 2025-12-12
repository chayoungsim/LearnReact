import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchWeatherData } from '../api/externalApi'
import './Header.scss'

const Header = () => {

 const [ weather, setWeather] = useState(null);
 const [ error, setError] = useState(null);

 const iconCode = weather?.weather[0].icon;
 const iconUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : null;
 const descCode = weather?.weather[0].description

 useEffect(() => {

    // 기본 위치 설정 (서울 기준 위도 및 경도)
    const DEFAULT_LAT = 37.5665; 
    const DEFAULT_LON = 126.9780;

    const loadWeather = async (lat, lon) => {
        try {
            const data = await fetchWeatherData(lat, lon);
            setWeather(data);
        } catch (err) {
            console.error("날씨 정보 로드 실패:", err);
            setError("날씨 정보를 불러오지 못했습니다.");
        }
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const {latitude, longitude} = position.coords;
                loadWeather(latitude, longitude);
                try{
                    const data = await fetchWeatherData(latitude, longitude)
                    setWeather(data)
                } catch(err) {
                    setError(err.message)
                }
            },
            (err) => {
                console.warn(`Geolocation 오류 (${err.code}): ${err.message}`);
                setError("위치 정보를 가져올 수 없습니다. 권한을 허용해주세요.");
                loadWeather(DEFAULT_LAT, DEFAULT_LON); // 기본 위치로 폴백
            }
        )
    } else {
        setError("브라우저가 Geolocation을 지원하지 않습니다.");
        loadWeather(DEFAULT_LAT, DEFAULT_LON); // 기본 위치로 폴백
    }

 },[])

  return (
    <header>
        <Link to="/">나의 블로그</Link>
        <nav>            
            <Link to="/new">글쓰기</Link>
            <Link to="/about">소개</Link>
        </nav>
        <div className='weather-info'>
            {weather ? (<span>{weather.name} {iconUrl && <img src={iconUrl} alt={descCode} />} {descCode}  {weather.main.temp}°C</span>)
                : error ? (<span className="error">{error}</span>) :(<span>날씨 불러오는 중...</span>)
            }
        </div>
    </header>
  )
}

export default Header