const {
  ADD_WEATHER_LOADER, REMOVE_WEATHER_LOADER, ADD_CLOTHES_LOADER, REMOVE_CLOTHES_LOADER,
} = require('../types/loader');

const addWeatherLoader = () => ({
  type: ADD_WEATHER_LOADER,
});

const removeWeatherLoader = () => ({
  type: REMOVE_WEATHER_LOADER,
});

const addClothesLoader = () => ({
  type: ADD_CLOTHES_LOADER,
});

const removeClothesLoader = () => ({
  type: REMOVE_CLOTHES_LOADER,
});

export {
  addWeatherLoader,
  removeWeatherLoader,
  addClothesLoader,
  removeClothesLoader,
};
