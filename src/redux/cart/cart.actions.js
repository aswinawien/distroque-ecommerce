import * as actionTypes from "./cart.action-types";

export const toggleCartHidden = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
  type: actionTypes.ADD_CART_ITEM,
  payload: item
});

export const removeCartItem = item => ({
  type: actionTypes.REMOVE_CART_ITEM,
  payload: item
});

export const decreaseCartItem = item => ({
  type: actionTypes.DECREASE_CART_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART
});
