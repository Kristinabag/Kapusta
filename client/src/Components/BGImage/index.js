/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function BGImage() {
  const weather = useSelector((state) => state.weather);

  const [weatherType, setWeatherType] = useState('');
  const [temperatureType, setTemperatureType] = useState('');

  useEffect(() => {
    if (weather.main) {
      const temperature = weather.main.temp;
      const weatherId = weather.weather[0].id;

      const weathType = weatherId >= 200 && weatherId <= 531
        ? 'rain'
        : weatherId >= 600 && weatherId <= 622
          ? 'snow'
          : weatherId === 800
            ? 'clear'
            : 'clouds';

      const tempType = temperature < -20
        ? 'extraFreeze'
        : temperature >= -20 && temperature < 1
          ? 'freeze'
          : temperature >= 1 && temperature < 11
            ? 'cold'
            : temperature >= 11 && temperature < 21
              ? 'warm'
              : 'hot';

      setWeatherType(weathType);
      setTemperatureType(tempType);
    }
  }, [weather]);

  useEffect(() => {
    if (weatherType === 'clear') {
      document.body.style.backgroundImage = 'url(sunlight.jpeg)';
    } else if (weatherType === 'snow') {
      document.body.style.backgroundImage = 'url(snow.png)';
    } else if (weatherType === 'rain') {
      document.body.style.backgroundImage = 'url(pexels-matheus-natan-3394939.jpg)';
    } else if (weatherType === 'clouds') {
      document.body.style.backgroundImage = 'url(pexels-magda-ehlers-2114014.jpg)';
    }
  }, [temperatureType, weatherType]);

  return (
    ''
  );
}

export default BGImage;
