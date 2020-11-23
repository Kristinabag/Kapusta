const {
  LOAD_CLOTHES, ADD_CLOTHES, ADD_CLOTH_ITEM, ADD_CLOTH_ITEM_SAGA,
} = require('../types/clothes');

const addClothes = (clothes) => ({
  type: ADD_CLOTHES,
  payload: clothes,
});

const addClothItem = (cloth) => ({
  type: ADD_CLOTH_ITEM,
  payload: cloth,
});

const loadClothesSaga = (weatherAndActivityParams) => ({
  type: LOAD_CLOTHES,
  payload: weatherAndActivityParams,
});

const addClothItemSaga = (userAndClothParams) => ({
  type: ADD_CLOTH_ITEM_SAGA,
  payload: userAndClothParams,
});

export {
  addClothes,
  addClothItem,
  loadClothesSaga,
  addClothItemSaga,
};
