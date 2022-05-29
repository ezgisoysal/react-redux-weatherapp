import React from 'react';
import { useSelector } from 'react-redux';

function WeatherInfo() {
  const dailyForecast = useSelector(state => state.weather.dailyForecast).current;
  const d = new Date(0); 
  d.setUTCSeconds(dailyForecast?.dt);
  const day = d.toLocaleString('en-us', {  weekday: 'long' });

  return (
    <div className="Weather">
      <img
        className="Weather__icon"
        src={`https://openweathermap.org/img/wn/${dailyForecast?.weather[0].icon}@2x.png`} alt="icon"
      />
      <ul className="Weather__list">
        <li className="list__temperature">
          {Math.ceil(Number(dailyForecast?.temp))}{" "}  
          <sup className="list__temperature-symbol">°C</sup>
        </li>
        <li>
          {" "}
          Humidity: {dailyForecast?.humidity} %
        </li>
      </ul>
      <div className="Weather__other-info">
        <h3 className="other-info__clouds">{day}</h3>
        <h3 className="other-info__clouds">
          {dailyForecast?.weather[0].description}
        </h3>
      </div>
    </div>
  )
}

export default WeatherInfo;