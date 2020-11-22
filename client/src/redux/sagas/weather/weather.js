import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_WEATHER } from '../../types/weather';
import { addLoader, removeLoader } from '../../actions/loader';
import { addWeather } from '../../actions/weather';

function getWeather(coordinates) {
  console.log('coordinates', coordinates);
  if (typeof coordinates === 'object') {
    // setting of temp with lat and long
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${process.env.REACT_APP_WEATHER_API}&lang=ru&units=metric`)
      .then((res) => res.json());
  }
  // initial setting of temp with city
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${coordinates}&appid=${process.env.REACT_APP_WEATHER_API}&lang=ru&units=metric`)
    .then((res) => res.json());
}

function* workerWeatherLoad(queryObj) {
  yield put(addLoader()); // put ~= dispatch
  const weatherData = yield call(getWeather, queryObj.payload);
  yield put(addWeather(weatherData));
  yield put(removeLoader());
}

export default function* watcherWeatherLoad() {
  yield takeEvery(LOAD_WEATHER, workerWeatherLoad);
}
