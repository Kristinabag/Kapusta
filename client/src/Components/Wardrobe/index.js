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
  const wardrobeType = 'myWardrobe';
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
        : temperature >= -20 && temperature < 0
          ? 'freeze'
          : temperature >= 0 && temperature < 11
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
      dispatch(
        loadClothesSaga([
          activity,
          temperatureType,
          weatherType,
          wardrobeType,
          user,
        ]),
      );
    }
  }, [activity, dispatch, temperatureType, weatherType, wardrobeType]);

  return (
    <div className="d-flex-column justify-content-between">
      <h4>Мой гардероб</h4>
      <Link to="/wardrobe/add">
        <button type="button" className="btn btn-light mx-1 navLink">
          Добавить одежду в гардероб
        </button>
      </Link>
      {!!clothes.length
        && (
          <div className="wardrobe">
            {
          clothes.map((el) => (
            <div className="pic" key={el._id}>
              <img src={el.imgUrl} alt={el.name} />
            </div>
          ))
        }
          </div>
        )}
      {!clothes.length
      && (
      <div className="d-flex-column justify-content-between">
        <h4>Гардероб пуст</h4>
      </div>
      )}
    </div>
  );
}

export default Wardrobe;
