import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadWeatherSaga } from '../../redux/actions/weather';
import style from './style.module.css';
import dateBuilder from '../../helpers/dateBuilder';

function Weather() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather);
  const loader = useSelector((state) => state.loader);

  const [city] = useState('Москва');
  const [date, setDate] = useState('');

  useEffect(() => {
    // redux saga
    dispatch(loadWeatherSaga(city));
    console.log('what is in data', data);
    const d = new Date();
    setDate(dateBuilder(d));
  }, [city, dispatch]);

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
                <span className={style.city}>{city}</span>
                {` - ${date}.`}
                <span className={style.temp}>{` ${Math.round(data.main?.temp)}°C`}</span>
                {` - ${data.weather && data.weather[0].description}. Чувствуется как `}
                <span className={style.temp}>{`${Math.round(data.main?.feels_like)}°C.`}</span>
              </div>
            </div>
          )
      }
    </>
  );
}

export default Weather;
