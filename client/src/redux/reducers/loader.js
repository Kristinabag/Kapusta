import { ADD, REMOVE } from '../types/loader';

const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case ADD:
      return true;
    case REMOVE:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
