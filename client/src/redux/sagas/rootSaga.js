import { all } from 'redux-saga/effects';

import weatherSaga from './weather/weather';
import clothesSaga from './clothes/clothes';

export default function* watcherAll() {
  yield all([
    weatherSaga(),
    clothesSaga(),
  ]);
}
