import {combineReducers} from 'redux';
import loaderReducer from './loader';
import weatherReducer from './weather';

const rootReducer = combineReducers({
  weather: weatherReducer,
  loader: loaderReducer
});

export default rootReducer;
