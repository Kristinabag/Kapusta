import { LOGIN, LOGOUT, SET_NAME } from '../types/user';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: {
          ...state.user,
          tokens: {
            ...action.payload,
          },
          isAuth: true,
        },
      };

    case LOGOUT:
      return {
        ...state,
        user: {
          name: '',
          isAuth: false,
          tokens: {
            accessToken: '',
            refreshToken: '',
          },
        },
      };

    case SET_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
