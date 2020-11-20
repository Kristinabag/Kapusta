const { LOAD_CLOTHES, ADD_CLOTHES } = require('../types/clothes');

const loadClothesSaga = (weatherAndActivityParams) => ({
  type: LOAD_CLOTHES,
  payload: weatherAndActivityParams,
});

const addClothes = (clothes) => ({
  type: ADD_CLOTHES,
  payload: clothes,
});

export {
  addClothes,
  loadClothesSaga,
};
