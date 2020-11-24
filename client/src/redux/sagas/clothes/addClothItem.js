import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_CLOTH_ITEM_SAGA } from '../../types/clothes';
import { addClothItem } from '../../actions/clothes';

function addCloth(params) {
  return fetch(`${process.env.REACT_APP_API_URL}/clothes/new`, {
    method: 'POST',
    body: params,
  })
    .then((res) => res.json());
}

function* worker(clothes) {
  const newCloth = yield call(addCloth, clothes.payload);
  console.log('newCloth: ', newCloth);
  yield put(addClothItem(newCloth));
}

export default function* watcher() {
  yield takeEvery(ADD_CLOTH_ITEM_SAGA, worker);
}
