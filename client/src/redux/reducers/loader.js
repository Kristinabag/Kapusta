import {
  ADD_WEATHER_LOADER, REMOVE_WEATHER_LOADER, ADD_CLOTHES_LOADER, REMOVE_CLOTHES_LOADER,
} from '../types/loader';

const loaderReducer = (loaders = { weather: false, clothes: false }, action) => {
  switch (action.type) {
    case ADD_WEATHER_LOADER:
      return {
        ...loaders,
        weather: true,
      };
    case REMOVE_WEATHER_LOADER:
      return {
        ...loaders,
        weather: false,
      };
    case ADD_CLOTHES_LOADER:
      return {
        ...loaders,
        clothes: true,
      };
    case REMOVE_CLOTHES_LOADER:
      return {
        ...loaders,
        clothes: false,
      };
    default:
      return loaders;
  }
};

export default loaderReducer;
