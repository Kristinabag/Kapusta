import { LOGIN, LOGOUT, SET_NAME } from '../types/user';

const ACTION_CREATORS = {
  LOGIN: (tokens) => ({
    type: LOGIN,
    payload: {
      ...tokens,
    },
  }),

  LOGOUT: () => ({
    type: LOGOUT,
  }),

  SET_NAME: (name) => ({
    type: SET_NAME,
    payload: {
      name,
    },
  }),
};

export default ACTION_CREATORS;
