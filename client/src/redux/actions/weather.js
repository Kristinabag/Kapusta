const { LOAD_WEATHER, ADD_WEATHER } = require('../types/weather');

const loadWeatherSaga = (city) => ({
  type: LOAD_WEATHER,
  payload: city,
});

const addWeather = (weatherData) => ({
  type: ADD_WEATHER,
  payload: weatherData,
});

export {
  addWeather,
  loadWeatherSaga,
};
