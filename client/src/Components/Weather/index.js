import {useState, useEffect} from 'react';
import dateBuilder from '../../helpers/dateBuilder';

function Weather() {
  // private key and weather API from openWeatherMap
  const api = {
    key: process.env.REACT_APP_WEATHER_API,
    baseurl: 'https://api.openweathermap.org/data/2.5/',
  };

  const [value, setValue] = useState('');
  const [city, setCity] = useState('Moscow');
  const [date, setDate] = useState('');
  const [temp, setTemp] = useState('');
  const [weatherState, setWeatherState] = useState('');
  const [high, setHigh] = useState('');
  const [low, setLow] = useState('');

  const inputHandler = (e) => {
    setValue(e.target.value);
  }

  const clickHandler = () => {
    setCity(value);
  }

  useEffect(() => {
    fetch(`${api.baseurl}weather?q=${city}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Вся инофрмация погоды', data);
        const d = new Date();
        setDate(dateBuilder(d));
        setTemp(Math.round(data.main.temp));
        setWeatherState(data.weather[0].main);
        setLow(Math.round(data.main.temp_min));
        setHigh(Math.round(data.main.temp_max));
      })
  },[city]);
  


  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center">
        <input onChange={inputHandler} type="text" value={value} placeholder="Enter city" />
        <button onClick={clickHandler}>Change city</button>
      </div>
      <div className="d-flex justify-content-center">
        <div>{`${city} ${date} ${temp}°C ${weatherState} ${low}°C / ${high}°C`}</div>
      </div>
    </div>
  )
}

export default Weather;
