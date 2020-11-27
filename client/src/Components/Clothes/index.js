/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import './style.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadClothesSaga } from '../../redux/actions/clothes';
import ClothesSet from '../ClothesSet';

function Clothes() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const clothes = useSelector((state) => state.clothes);
  const activity = useSelector((state) => state.activity);
  const wardrobeType = useSelector((state) => state.wardrobeType);
  const user = useSelector((state) => state.user);

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
    if (temperatureType && weatherType) {
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
    <>
      <ClothesSet clothes={clothes} />
    </>
  );
}

export default Clothes;
