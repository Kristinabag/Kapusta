import { CHANGE_TYPE } from '../types/wardrobeType';

const changeWardrobeType = (type) => ({
  type: CHANGE_TYPE,
  payload: type,
});

export default changeWardrobeType;
