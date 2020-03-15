import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import * as actionTypes from "./shop.action-types";

export const fetchCollectionsStart = collectionsMap => ({
  type: actionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: actionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection(`collections`);
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => {
        console.error(error);
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};
