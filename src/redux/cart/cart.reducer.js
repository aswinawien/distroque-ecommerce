import * as actionTypes from "./cart.action-types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case actionTypes.ADD_CART_ITEMS: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
