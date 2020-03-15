import { createSelector } from "reselect";

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }) => collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  ({ isFetching }) => isFetching
);

export const selectCollectionsIsLoaded = createSelector(
  [selectShop],
  ({ collections }) => !!collections
);
