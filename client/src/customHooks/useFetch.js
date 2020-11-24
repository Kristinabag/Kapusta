import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ACTION_CREATORS from '../redux/actions/user';

const fetching = async (path, accessToken, refreshToken, dispatch, history) => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${accessToken}`);
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const response = await fetch(path, requestOptions);

  if (response.status === 200) {
    const result = await response.json();
    return result;
  } if (response.status === 403) {
    console.log('GET NEW TOKENS');
    const newTokens = await updateTokens(refreshToken);
    console.log(newTokens);
    if (!newTokens) {
      console.log(ACTION_CREATORS.LOGOUT());
      dispatch(ACTION_CREATORS.LOGOUT());
      history.push('/login');
    } else {
      dispatch(ACTION_CREATORS.LOGIN({
        accessToken: newTokens.accessToken,
        refreshToken: newTokens.refreshToken,
      }));
      return fetching(path, newTokens.accessToken, newTokens.refreshToken, dispatch, history);
    }
  } else {
    return { message: 'Undefined error' };
  }
};

const updateTokens = async (refreshToken) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const data = JSON.stringify({ refreshToken });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
  };

  const response = await fetch('http://localhost:3000/user/token', requestOptions);
  console.log(response);

  if (response.status === 200) {
    const result = await response.json();
    return result;
  }
  return false;
};

const useFetch = (path) => {
  const dispatch = useDispatch();
  const tokens = useSelector((state) => state.user.tokens);
  const history = useHistory();

  const makeFetch = async () => fetching(path, tokens.accessToken, tokens.refreshToken, dispatch, history);

  return makeFetch;
};

export default useFetch;
