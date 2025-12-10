import React from 'react'

const WeatherBox = ({weather}) => {
    const iconCode = weather?.weather[0].icon;
    const iconUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : null
    const descCode = weather?.weather[0].description



  return (
    <div>
        <h2>{weather && weather.name}</h2>
        <div>{weather?.main.temp} °C</div>
        <div>{iconUrl && <img src={iconUrl} alt={descCode} />}</div>
        <div>{descCode}</div>
    </div>
  )
}

export default WeatherBox