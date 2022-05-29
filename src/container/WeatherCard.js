import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

function WeatherCard() {
  const dailyForecasts = useSelector(state => state.weather.dailyForecast);

  return (
    <div className="WeatherAndForecast__container">
      {dailyForecasts?.daily?.map(forecast => (
        <Card key={forecast.dt} forecast={forecast} />
      ))}
    </div>
  )
}

export default WeatherCard;