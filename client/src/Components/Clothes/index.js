/* eslint-disable no-nested-ternary */
import './style.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadClothesSaga } from '../../redux/actions/clothes';

function Clothes() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const clothes = useSelector((state) => state.clothes);
  const activity = useSelector((state) => state.activity);

  const [weatherType, setWeatherType] = useState('');
  const [temperatureType, setTemperatureType] = useState('');

  useEffect(() => {
    if (weather.main) {
      const temperature = weather.main.temp;
      const weatherId = weather.weather.id;

      const weathType = weatherId >= 200 && weatherId <= 531 ? 'rain'
        : weatherId >= 600 && weatherId <= 622 ? 'snow'
          : weatherId === 800 ? 'clear' : 'clouds';

      const tempType = temperature < -20 ? 'extraFreeze'
        : temperature >= -20 && temperature < 1 ? 'freeze'
          : temperature >= 1 && temperature < 11 ? 'cold'
            : temperature >= 11 && temperature < 21 ? 'warm' : 'hot';

      setWeatherType(weathType);
      setTemperatureType(tempType);
    }
  }, [weather]);

  useEffect(() => {
    if (temperatureType && weatherType) {
      dispatch(loadClothesSaga([activity, temperatureType, weatherType]));
    }
  },
  [activity, dispatch, temperatureType, weatherType]);

  return (
    <div className="Clothes">
      <div className="head type">
        {/* <img src="./img/hatWarm.png" />
      </div>
      <div className="body type">
        <img src="./img/jacketRain.png" />

      </div>
      <div className="legs type">
        <img src="./img/pants.png" />
      </div>
      <div className="boots type">
        <img src="./img/ugg.png" />
      </div>
      <div> */}
        {!!clothes.length && clothes.map((el) => <img src={el.imgUrl} alt={el.name} />)}
      </div>
    </div>
  );
}

export default Clothes;
