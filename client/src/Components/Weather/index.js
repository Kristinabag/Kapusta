import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadWeatherSaga } from '../../redux/actions/weather';
import style from './style.module.css';
import dateBuilder from '../../helpers/dateBuilder';

function Weather() {
  
  const dispatch = useDispatch();
  const data = useSelector(state => state.weather);
  const loader = useSelector(state => state.loader);

  const [value, setValue] = useState('');
  const [city, setCity] = useState('Moscow');
  const [date, setDate] = useState('');
  
  const inputHandler = (e) => {
    setValue(e.target.value);
  }

  const clickHandler = () => {
    setCity(value);
  }

  useEffect(() => {
    // redux saga
    dispatch(loadWeatherSaga(city));
    console.log('what is in data', data);
    const d = new Date();
    setDate(dateBuilder(d));
  },[city, dispatch]);

  return (
    <>
      {
        loader ?
        (
          <div className={style.loaderWr}>
            <div className={style['lds-dual-ring']} />
          </div>
        ) :
        (
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center">
              <input onChange={inputHandler} type="text" value={value} placeholder="Enter city" />
              <button onClick={clickHandler}>Change city</button>
            </div>
            <div className="d-flex justify-content-center">
              <div>{`${city} ${date} ${Math.round(data.main?.temp)}°C ${data.weather && data.weather[0].description} ${Math.round(data.main?.temp_min)}°C / ${Math.round(data.main?.temp_max)}°C`}</div>
            </div>
          </div>
        )
      }
  </>)
}

export default Weather;
