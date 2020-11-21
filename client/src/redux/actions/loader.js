const { ADD, REMOVE } = require('../types/loader');

const addLoader = () => ({
  type: ADD,
});

const removeLoader = () => ({
  type: REMOVE,
});

export {
  addLoader,
  removeLoader,
};
