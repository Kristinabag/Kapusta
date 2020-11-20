import { ADD_CLOTHES } from '../types/clothes';

const clothesReducer = (clothes = [], action) => {
  switch (action.type) {
    case ADD_CLOTHES:
      return action.payload
  
    default:
      return clothes
  }
}

export default clothesReducer;
