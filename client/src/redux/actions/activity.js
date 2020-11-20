import { CHOOSE_ACTIVITY } from '../types/activity';

const chooseActivity = (activity) => {
  return {
    type: CHOOSE_ACTIVITY,
    payload: activity,
  }
}

export { chooseActivity };
