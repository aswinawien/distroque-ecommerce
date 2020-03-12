import { createSelector } from "reselect";

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }) => collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
