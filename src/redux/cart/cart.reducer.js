import * as actionTypes from "./cart.action-types";

const INITIAL_STATE = {
  hidden: true
};

const cartReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
