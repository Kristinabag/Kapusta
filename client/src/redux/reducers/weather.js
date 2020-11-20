import { ADD_WEATHER } from '../types/weather';

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_WEATHER:
      return action.payload;

    default:
      return state;
  }
};

export default weatherReducer;
