const initState = () => {
  const defaultUser = {
    name: '',
    isAuth: false,
    tokens: {
      accessToken: '',
      refreshToken: '',
    },
  };

  const init = {
    weather: {},
    activity: 'leasure-walking',
    clothes: [],
    loader: false,
    wardrobeType: 'default',
    user: JSON.parse(localStorage.getItem('user')) || defaultUser,
  };
  return init;
};

export default initState;
