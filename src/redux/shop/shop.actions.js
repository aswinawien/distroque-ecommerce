import * as actionTypes from "./shop.action-types";

export const addCollections = collectionsMap => ({
  type: actionTypes.ADD_COLLECTIONS,
  payload: collectionsMap
});
