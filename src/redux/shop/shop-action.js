import { ShopAction } from './shop-action-types.js'

import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase-utils.js";

export const fetchCollectionStart = () => ({
  type: ShopAction.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = collectionsMap => ({
  type: ShopAction.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionFailure = errorMessage => ({
  type: ShopAction.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
})

export const fetchCollectionAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart())

    collectionRef.get()
      .then(snapShot => {
        const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
        dispatch(fetchCollectionSuccess(collectionsMap))
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)))

  }
}
