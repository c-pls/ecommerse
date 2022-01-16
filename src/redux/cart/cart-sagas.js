import { all, call, put, takeLatest } from 'redux-saga/effects'

import { userAction } from '../user/user-action-types.js'

import { clearCart } from './cart-action.js'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(userAction.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}
