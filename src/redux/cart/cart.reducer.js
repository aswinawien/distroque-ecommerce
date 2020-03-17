import * as actionTypes from "./cart.action-types";
import {
  addItemToCart,
  filterOutCartItem,
  decreaseCartItemQuantity
} from "./cart.utils";

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
    case actionTypes.ADD_CART_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    }
    case actionTypes.REMOVE_CART_ITEM: {
      return {
        ...state,
        cartItems: filterOutCartItem(state.cartItems, action.payload)
      };
    }
    case actionTypes.DECREASE_CART_ITEM: {
      return {
        ...state,
        cartItems: decreaseCartItemQuantity(state.cartItems, action.payload)
      };
    }
    case actionTypes.CLEAR_CART: {
      return {
        ...state,
        cartItems: []
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
