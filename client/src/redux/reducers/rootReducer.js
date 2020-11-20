import {combineReducers} from 'redux';
import loaderReducer from './loader';
import weatherReducer from './weather';
import activityReducer from './activity';

const rootReducer = combineReducers({
  weather: weatherReducer,
  activity: activityReducer,
  loader: loaderReducer
});

export default rootReducer;
