import { all } from 'redux-saga/effects';

import weatherSaga from './weather/weather';
import addClothItemSaga from './clothes/addClothItem';
import loadClothesSaga from './clothes/loadClothes';

export default function* watcherAll() {
  yield all([
    weatherSaga(),
    addClothItemSaga(),
    loadClothesSaga(),
  ]);
}
