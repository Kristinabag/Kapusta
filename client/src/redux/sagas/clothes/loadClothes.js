import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_CLOTHES } from '../../types/clothes';
import { addClothes } from '../../actions/clothes';

function getClothes(params) {
  console.log('params: ', params);
  return fetch(`${process.env.REACT_APP_API_URL}/clothes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      activityFor: params[0],
      temperatureFor: params[1],
      weatherFor: params[2],
      wardrobeType: params[3],
      user: params[4],
    }),
  })
    .then((res) => res.json());
}

function* worker(clothes) {
  const clothesData = yield call(getClothes, clothes.payload);
  console.log('clothes from back: ', clothesData);
  yield put(addClothes(clothesData));
}

export default function* watcher() {
  yield takeEvery(LOAD_CLOTHES, worker);
}
