import { categories } from "../../mocks/categories";

const INITIAL_STATE = {
  sections: categories
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
