import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateDailyForecast } from '../redux/weatherSlice';
import axios from "axios";
import city from '../redux/city.json';

function Dropdown() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const currentCity = city.filter(selectedCity => selectedCity.name === e.target.value)[0];
    getWeatherData(currentCity.latitude, currentCity.longitude);
  };

  const getWeatherData = async(lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}` + 
    `&units=metric&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`;
    const res = await axios(url);
    const dailyForecastArray = res.data;
    dispatch(updateDailyForecast(dailyForecastArray));
  };

  useEffect(() => {
    getWeatherData(city[6].latitude, city[6].longitude);
  }, []);
  
  return (
    <div className="form-group">
      <select className="form-select" id="sel1" onChange={handleChange} defaultValue="Antalya">
        {city.map(c => (
          <option key={c.name} value={c.name} >{c.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown;