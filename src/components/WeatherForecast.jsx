// WeatherForecast.js

import React from 'react'
import { useGetWeatherForecastQuery } from '../services/api'
import './WeatherForecast.css'

const WeatherForecast = ({ city }) => {
  const { data, error, isLoading } = useGetWeatherForecastQuery(city)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className='weather'>
      {/* Отображение данных о текущей погоде и прогнозах */}
      {data && (
        <div>
          <h2>Текущая погода: {data.current.temp_c}°C</h2>
          <h3>Прогноз погоды на следующие 5 дней:</h3>
          {data.forecast.forecastday.map((day) => (
            <div key={day.date}>
              <p>Дата: {day.date}</p>
              <p>Максимальная температура: {day.day.maxtemp_c}°C</p>
              <p>Минимальная температура: {day.day.mintemp_c}°C</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default WeatherForecast
