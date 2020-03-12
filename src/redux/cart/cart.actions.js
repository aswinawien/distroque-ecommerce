import * as actionTypes from "./cart.action-types";

export const toggleCartHidden = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
  type: actionTypes.ADD_CART_ITEMS,
  payload: item
});
