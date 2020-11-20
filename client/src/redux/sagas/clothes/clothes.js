import { LOAD_CLOTHES } from "../../types/clothes";
import {call, put, takeEvery} from 'redux-saga/effects'
import { addClothes } from "../../actions/clothes";

function getClothes(params) {
  return fetch(`${process.env.REACT_APP_API_URL}/clothes/${params[0]}/${params[1]}/${params[2]}`)
    .then((res) => res.json());
}


function* worker(clothes) {  
  const clothesData = yield call(getClothes, clothes.payload);
  yield put(addClothes(clothesData));

}

export default function* watcher() {
  yield takeEvery(LOAD_CLOTHES, worker)
}
