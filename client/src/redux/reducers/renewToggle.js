import { RENEW_TOGGLE } from '../types/renewToggle';

const renewToggleReducer = (renewToggle = false, action) => {
  switch (action.type) {
    case RENEW_TOGGLE:
      return !renewToggle;

    default:
      return renewToggle;
  }
};

export default renewToggleReducer;
