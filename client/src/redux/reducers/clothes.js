import { ADD_CLOTHES, ADD_CLOTH_ITEM } from '../types/clothes';

const clothesReducer = (clothes = [], action) => {
  switch (action.type) {
    case ADD_CLOTHES:
      return action.payload;

    case ADD_CLOTH_ITEM:
      return [...clothes, action.payload];

    default:
      return clothes;
  }
};

export default clothesReducer;
