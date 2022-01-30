import * as CONST from "./contractTypes";

const intialState = {
  list: [],
};
const contractReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.ADD_CONTRACT:
      return {
        ...state,
        list: payload,
      };

    case CONST.EDIT_CONTRACT:
      return {
        ...state,
        list: payload,
      };

    case CONST.REMOVE_CONTRACT:
    case CONST.ADD_TO_FAVOURITE_CONTRACT:
    case CONST.REMOVE_FAVOURITE_CONTRACT:
      return {
        ...state,
        list: payload,
      };

    default:
      return state;
      break;
  }
};

export default contractReducer;
