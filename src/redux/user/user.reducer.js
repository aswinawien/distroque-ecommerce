import * as actionTypes from "./user.action-types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload
      };
    }
    default:
      return state;
  }
};

export default userReducer;
