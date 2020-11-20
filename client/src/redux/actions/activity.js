import { CHOOSE_ACTIVITY } from '../types/activity';

const chooseActivity = (activity) => ({
  type: CHOOSE_ACTIVITY,
  payload: activity,
});

export default chooseActivity;
