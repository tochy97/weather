import React from 'react'
import Weather from './Weather'


type Props = {
    longitude: number
    latitude: number
    temperature_unit: string
    wind_speed_unit: string
}
  
export default function WeatherUI({longitude, latitude,temperature_unit, wind_speed_unit}: Props) {
    const self = new Weather({longitude, latitude,temperature_unit, wind_speed_unit});
    self.updateWeather();
    return (
        <div className='container'>
          {
            self.config.loaded
            &&
            <div className='weather'>
                <div className='temperature'>{self.current_weather?.temperature + `\u00B0` + self.config.temperature_unit.toUpperCase()} </div>
                <div>{self.current_weather?.wind_speed + ' ' + self.config.wind_speed_unit.toUpperCase() + ' ' + self.current_weather?.wind_direction}</div>
                <div>{self.current_weather?.weather_condition}</div>
            </div>
          }
          <svg
            role='button'
            className={self.config.loaded ? "update_button" : "spin"}
            fill="currentColor"
            height="1em"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={self.updateWeather} 
          >
            <path
              d="M1.7507,16.0022 C3.3517,20.0982 7.3367,23.0002 11.9997,23.0002 C18.0747,23.0002 22.9997,18.0752 22.9997,12.0002 M22.2497,7.9982 C20.6487,3.9012 16.6627,1.0002 11.9997,1.0002 C5.9247,1.0002 0.9997,5.9252 0.9997,12.0002 M8.9997,16.0002 L0.9997,16.0002 L0.9997,24.0002 M22.9997,0.0002 L22.9997,8.0002 L14.9997,8.0002"
              fill="none"
              strokeWidth="2"
            />
          </svg>
        </div>
      )
}