import { LOGIN, LOGOUT, SET_NAME } from '../types/user';

const ACTION_CREATORS = {
  LOGIN: (tokens) => {
    console.log('ACTION_CREATOR_LOGIN', tokens);
    return {
      type: LOGIN,
      payload: {
        ...tokens,
      },
    };
  },
  LOGOUT: () => ({ type: LOGOUT }),
  // LOGOUT: () => {
  //   return {type: LOGOUT}
  // },
  SET_NAME: (name) => ({
    type: SET_NAME,
    payload: {
      name,
    },
  }),
};

export default ACTION_CREATORS;
