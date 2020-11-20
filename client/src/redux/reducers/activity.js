import { CHOOSE_ACTIVITY } from '../types/activity';

const activityReducer = (state = 'leasure-walking', action) => {
  switch (action.type) {
    case CHOOSE_ACTIVITY:
      return action.payload
  
    default:
      return state
  }
}

export default activityReducer;
