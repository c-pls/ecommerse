import { ShopActionType } from "./shop-constants";
import * as Effects from "redux-saga/effects";

import { takeLatest, call, put, all } from "redux-saga/effects";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop-action";

import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase-utils";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export function* fetchCollectionAsync() {
  try {
    const call: any = Effects.call;
    const collectionRef = firestore.collection("collections");
    const snapShot: ResponseGenerator = yield collectionRef.get();

    const collectionsMap: ResponseGenerator = yield call(
      convertCollectionsSnapShotToMap,
      snapShot
    );

    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error: any) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(ShopActionType.FETCH_COLLECTION_START, fetchCollectionAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
