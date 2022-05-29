import React from 'react';

function Card(forecast) {
  const d = new Date(0); 
  d.setUTCSeconds(forecast.forecast.dt);
  const day = d.toLocaleString('en-us', {  weekday: 'long' });

  return (
    <div>
      <h1 className="Forecast__Title">{day}</h1>
      <img className="Forecast__weather-icon"
        src={`https://openweathermap.org/img/wn/${forecast.forecast.weather[0].icon}@2x.png`}
        alt="img" 
      />
      <div className="Forecast__temperature">
        <span className="temperature__max">{Math.ceil(Number(forecast.forecast.temp.max))}
          <sup className="temperature__symbol">°C</sup>
        </span>
        <span className="temperature__min">{Math.ceil(Number(forecast.forecast.temp.min))}
          <sup className="temperature__symbol">°C</sup>
        </span>
      </div>
    </div>
  )
}

export default Card;