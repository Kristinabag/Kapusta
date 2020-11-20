import { LOAD_WEATHER } from "../../types/weather";
import {call, put, takeEvery} from 'redux-saga/effects'
import { addLoader, removeLoader } from "../../actions/loader";
import { addWeather } from "../../actions/weather";

function getWeather(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}&lang=ru`)
          .then((res) => res.json())
}


function* workerWeatherLoad(queryObj) {
  console.log('>>>>>',queryObj);
  
  yield put(addLoader()) // put ~= dispatch

  const weatherData = yield call(getWeather, queryObj.payload);
  console.log(weatherData, 'weatherdata');
  
  yield put(addWeather(weatherData));

  yield put(removeLoader())

}

export default function* watcherWeatherLoad() {
  yield takeEvery(LOAD_WEATHER, workerWeatherLoad)
}
