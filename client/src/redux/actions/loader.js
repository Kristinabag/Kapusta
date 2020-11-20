const { ADD, REMOVE } = require("../types/loader");

const addLoader = () => {
  return {
    type: ADD
  }
}

const removeLoader = () => {
  return {
    type: REMOVE
  }
}

export {
  addLoader,
  removeLoader
}
