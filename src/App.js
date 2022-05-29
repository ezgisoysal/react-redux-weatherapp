import React from 'react';
import './App.css';
import Dropdown from './container/Dropdown';
import WeatherInfo from './container/WeatherInfo';
import WeatherCard from './container/WeatherCard';
import { useSelector } from 'react-redux';

function App() {
  const dailyForecast = useSelector(state => state.weather.dailyForecast);

  return (
    <div>
      <div className="header">
        <h1 className="header-title">WEATHER APP</h1>
        <Dropdown />
      </div>
      <div className="WeatherAndForecast">
        {dailyForecast && <WeatherInfo />}
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
