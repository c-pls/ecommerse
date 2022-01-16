import { takeLatest, put, all, call } from "redux-saga/effects";

import { userAction } from "./user-action-types.js";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from "./user-action.js";

import {
  googleProvider,
  auth,
  createUserProfile,
  getCurrentUser,
} from "../../firebase/firebase-utils.js";

function* getSnapShotFromUser(userAuth, additionalData) {
  const userRef = yield call(createUserProfile, userAuth, additionalData);
  try {
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getSnapShotFromUser(user);
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    yield getSnapShotFromUser(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

export function* signUp({ payload }) {
  const { displayName, email, password } = payload;
  try {
    console.log(displayName, email, password)
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    console.log("Herer")
    yield put(signUpSuccess( {user, additionalData: { displayName }}  ));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUpSuccess({
  payload: { user, additionalData },
}) {
  try {

    yield getSnapShotFromUser(user, additionalData);

  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userAction.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userAction.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(userAction.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onUserSignOut() {
  yield takeLatest(userAction.SIGN_OUT_START, signOut);
}

export function* onUserSignUp() {
  yield takeLatest(userAction.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userAction.SIGN_UP_SUCCESS, signInAfterSignUpSuccess);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onUserSignOut),
    call(onUserSignUp),
    call(onSignUpSuccess),
  ]);
}
