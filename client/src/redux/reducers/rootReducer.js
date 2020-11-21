import { combineReducers } from 'redux';
import loaderReducer from './loader';
import weatherReducer from './weather';
import activityReducer from './activity';
import clothesReducer from './clothes';

const rootReducer = combineReducers({
  weather: weatherReducer,
  activity: activityReducer,
  clothes: clothesReducer,
  loader: loaderReducer,
});

export default rootReducer;
