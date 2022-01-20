import { userAction } from "./user-constants";
interface EmailAndPassWord {
  email: string;
  password: string;
}

export const setCurrentUser = (currentUser: any) => ({
  type: "SET_CURRENT_USER",
  payload: currentUser,
});

export const googleSignInStart = () => ({
  type: userAction.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword: EmailAndPassWord) => ({
  type: userAction.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user: any) => ({
  type: userAction.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: Error) => ({
  type: userAction.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: userAction.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userAction.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userAction.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: Error) => ({
  type: userAction.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (info: EmailAndPassWord) => ({
  type: userAction.SIGN_UP_START,
  payload: info,
});

interface Props {
  user: any;
  additionalData: any;
}

export const signUpSuccess = ({ user, additionalData }: Props) => ({
  type: userAction.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error: Error) => ({
  type: userAction.SIGN_UP_FAILURE,
  payload: error,
});
