import * as actionTypes from "./shop.action-types";

const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_COLLECTIONS: {
      return {
        ...state,
        collections: action.payload
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
