import { userAction } from './user-action-types.js'

export const googleSignInStart = () => ({
  type: userAction.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = emailAndPassword => ({
  type: userAction.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

export const signInSuccess = user => ({
  type: userAction.SIGN_IN_SUCCESS,
  payload: user
})

export const signInFailure = error => ({
  type: userAction.SIGN_IN_FAILURE,
  payload: error
})

export const checkUserSession = () => ({
  type: userAction.CHECK_USER_SESSION,
})

export const signOutStart = () => ({
  type: userAction.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: userAction.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
  type: userAction.SIGN_OUT_FAILURE,
  payload: error
})

export const signUpStart = info => ({
  type: userAction.SIGN_UP_START,
  payload: info
})

export const signUpSuccess = ({user, additionalData}) => ({
  type: userAction.SIGN_UP_SUCCESS,
  payload: {user, additionalData}
})

export const signUpFailure = error => ({
  type: userAction.SIGN_UP_FAILURE,
  payload: error
})
