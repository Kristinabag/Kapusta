import { combineReducers } from 'redux';
import loaderReducer from './loader';
import weatherReducer from './weather';
import activityReducer from './activity';
import clothesReducer from './clothes';
import userReducer from './user';
import wardrobeTypeReduder from './wardrobeType';

const rootReducer = combineReducers({
  weather: weatherReducer,
  activity: activityReducer,
  clothes: clothesReducer,
  loader: loaderReducer,
  user: userReducer,
  wardrobeType: wardrobeTypeReduder,
});

export default rootReducer;
