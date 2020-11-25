/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function BGImage() {
  const weather = useSelector((state) => state.weather);
  const [bgImage, setBgImage] = useState('url(https://cdn.pixabay.com/photo/2019/09/20/06/01/watercolor-background-4490904_1280.jpg)');

  const [weatherType, setWeatherType] = useState('');
  console.log('weatherType', weatherType);

  useEffect(() => {
    if (weather.main) {
      const weatherId = weather.weather[0].id;

      const weathType = weatherId >= 200 && weatherId <= 531
        ? 'rain'
        : weatherId >= 600 && weatherId <= 622
          ? 'snow'
          : weatherId === 800
            ? 'clear'
            : 'clouds';

      setWeatherType(weathType);
    }
  }, [weather]);

  useEffect(() => {
    if (weatherType === 'clear') setBgImage('url(/sunlight.jpeg)');
    else if (weatherType === 'snow') setBgImage('url(/snow.png)');
    else if (weatherType === 'rain') setBgImage('url(/pexels-matheus-natan-3394939.jpg)');
    else if (weatherType === 'clouds') setBgImage('url(/pexels-magda-ehlers-2114014.jpg)');
  }, [weatherType]);

  useEffect(() => {
    document.body.style.backgroundImage = bgImage;
  }, [bgImage]);

  return (
    ''
  );
}

export default BGImage;
