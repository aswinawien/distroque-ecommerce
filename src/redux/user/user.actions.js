import * as actionTypes from "./user.action-types";

export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
