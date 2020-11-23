import { combineReducers } from 'redux';
import loaderReducer from './loader';
import weatherReducer from './weather';
import activityReducer from './activity';
import clothesReducer from './clothes';
import userReducer from './user';

const rootReducer = combineReducers({
  weather: weatherReducer,
  activity: activityReducer,
  clothes: clothesReducer,
  loader: loaderReducer,
  user: userReducer,
});

export default rootReducer;
