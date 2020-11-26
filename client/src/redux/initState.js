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
    wardrobeType: 'default',
    user: JSON.parse(localStorage.getItem('user')) || defaultUser,
    renewToggle: false,
    loaders: {
      weather: false,
      clothes: false,
    },
  };
  return init;
};

export default initState;
