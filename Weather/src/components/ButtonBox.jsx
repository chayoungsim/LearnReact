import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonBox = ({citis, selectedCity, handleCityChange}) => {
  return (
    <div className='weather-btns'>
        <Button variant={`${selectedCity == null ? "success" : "secondary"}`}
                onClick={() => handleCityChange("current")}>현재위치 </Button>
        {
            citis.map((city,index) =><Button key={index} 
            variant={`${selectedCity == city ? "success" : "secondary"}`}
            onClick={() => handleCityChange(city)}>{city}</Button>)
        }        
    </div>
  )
}

export default ButtonBox