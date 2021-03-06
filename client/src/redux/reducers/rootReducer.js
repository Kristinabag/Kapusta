import { combineReducers } from 'redux';
import loaderReducer from './loader';
import weatherReducer from './weather';
import activityReducer from './activity';
import clothesReducer from './clothes';
import userReducer from './user';
import wardrobeTypeReduder from './wardrobeType';
import renewToggleReducer from './renewToggle';

const rootReducer = combineReducers({
  weather: weatherReducer,
  activity: activityReducer,
  clothes: clothesReducer,
  loaders: loaderReducer,
  user: userReducer,
  wardrobeType: wardrobeTypeReduder,
  renewToggle: renewToggleReducer,
});

export default rootReducer;
