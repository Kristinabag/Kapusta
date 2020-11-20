const { LOAD_CLOTHES, ADD_CLOTHES } = require("../types/clothes")

const loadClothesSaga = (weatherAndActivityParams) => {
  return {
    type: LOAD_CLOTHES,
    payload: weatherAndActivityParams,
  }
}

const addClothes = (clothes) => {
  return {
    type: ADD_CLOTHES,
    payload: clothes,
  }
}

export {
  addClothes,
  loadClothesSaga,
}
