import { CHANGE_TYPE } from '../types/wardrobeType';

const wardrobeTypeReducer = (state = 'default', action) => {
  switch (action.type) {
    case CHANGE_TYPE:
      return action.payload;

    default:
      return state;
  }
};

export default wardrobeTypeReducer;
