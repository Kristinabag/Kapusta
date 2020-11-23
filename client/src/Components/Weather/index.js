import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadWeatherSaga } from '../../redux/actions/weather';
import style from './style.module.css';
import dateBuilder from '../../helpers/dateBuilder';

function Weather() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const loader = useSelector((state) => state.loader);

  const [date, setDate] = useState('');

  useEffect(() => {
    dispatch(loadWeatherSaga('Москва'));
    const d = new Date();
    setDate(dateBuilder(d));
  }, []);

  return (
    <>
      {
        loader
          ? (
            <div className={style.loaderWr}>
              <div className={style['lds-dual-ring']} />
            </div>
          )
          : (
            <div className={style.weather}>
              <div>
                <span className={style.city}>{weather.name}</span>
                {` - ${date}.`}
                <span className={style.temp}>{` ${Math.round(weather.main?.temp)}°C`}</span>
                {` - ${weather.weather && weather.weather[0].description}. Чувствуется как `}
                <span className={style.temp}>{`${Math.round(weather.main?.feels_like)}°C.`}</span>
              </div>
            </div>
          )
      }
    </>
  );
}

export default Weather;
