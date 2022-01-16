import { userAction } from "./user-action-types.js";

const INIT_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case userAction.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userAction.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };


    case userAction.SIGN_IN_FAILURE:
    case userAction.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
