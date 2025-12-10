import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBox from './components/ButtonBox'
import WeatherBox from './components/WeatherBox'
import { BeatLoader } from "react-spinners";

function App() {
  let [loading, setLoading] = useState(true)
  const [apiError, setAPIError] = useState("");
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState(null)

  const citis = ["hanoi", "paris", "new york", "seoul"]
  const API_key = "5a83fe8234fc03d79b5d319320864273"

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon)
    })
  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=kr`
    try{
      const res = await axios.get(url);
      setWeather(res.data)
      setLoading(false);
    } catch(error) {
      console.error("데이터 로드 실패",error)
      setLoading(false)
    }
  }

  const getWeatherByCity = async() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric&lang=kr`
    try {
      const res = await axios.get(url);
      setWeather(res.data);
      setLoading(false)
    } catch(error) {
      console.error("데이터 로드 실패", error)
      setLoading(false)
    }
  }

  const handleCityChange = (city) => {
    if(city === "current"){      
      setCity(null)
    } else {
      setCity(city)
    }
  }

  useEffect(() => {
    if(city == null) {
      setLoading(true)
      getCurrentPosition()
    } else {
      setLoading(true)
      getWeatherByCity()
    }

  },[city])


  return (
    <>
      <div className='weather-wrap'>
        {loading ? (
          <BeatLoader color="#5bb8ec" size={100} loading={loading} />
        ) : !apiError ? (
          <div>
            <WeatherBox weather={weather} />
            <ButtonBox citis={citis} handleCityChange={handleCityChange} selectedCity={city} />   
          </div>
        ) :(apiError) }
          
      </div> 
    </>
  )
}

export default App
