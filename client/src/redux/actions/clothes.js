const { LOAD_CLOTHES, ADD_CLOTHES } = require("../types/clothes")

const loadClothesSaga = (clothes) => {
  return {
    type: LOAD_CLOTHES,
    payload: clothes,
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
