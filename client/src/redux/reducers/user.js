import { LOGIN, LOGOUT, SET_NAME } from '../types/user';

const userReducer = (user = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...user,
        tokens: {
          ...action.payload,
        },
        isAuth: true,
      };

    case LOGOUT:
      return {
        ...user,
        // user: {
        name: '',
        isAuth: false,
        tokens: {
          accessToken: '',
          refreshToken: '',
          // },
        },
      };

    case SET_NAME:
      return {
        ...user,
        name: action.payload.name,
      };

    default:
      return user;
  }
};

export default userReducer;
