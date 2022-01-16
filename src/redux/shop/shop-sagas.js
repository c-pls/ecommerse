import { ShopAction } from './shop-action-types.js'

import { takeLatest, call, put, all } from 'redux-saga/effects'

import { fetchCollectionSuccess, fetchCollectionFailure } from './shop-action.js'

import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase-utils.js";


export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapShotToMap, snapShot)
    yield put(fetchCollectionSuccess(collectionsMap))

  } catch (error) {
    yield put(fetchCollectionFailure(error.message))
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopAction.FETCH_COLLECTION_START,
    fetchCollectionAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)])
}
