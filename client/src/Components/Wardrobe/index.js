/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import './style.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadClothesSaga } from '../../redux/actions/clothes';

function Wardrobe() {
  const user = useSelector((state) => state.user);
  const weather = useSelector((state) => state.weather);
  const clothes = useSelector((state) => state.clothes);
  const activity = useSelector((state) => state.activity);
  const dispatch = useDispatch();

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
    if (user && temperatureType && weatherType) {
      dispatch(loadClothesSaga([user, activity, temperatureType, weatherType]));
    }
  }, [activity, dispatch, temperatureType, weatherType]);

  return (
    <div className="Clothes">
      {!!clothes.length
        && clothes.map((el) => <img key={el._id} src={el.imgUrl} alt={el.name} />)}
      <Link to="/wardrobe/add">
        <button type="button">Добавить новую одежду в гардероб</button>
      </Link>
    </div>
  );
}

export default Wardrobe;
