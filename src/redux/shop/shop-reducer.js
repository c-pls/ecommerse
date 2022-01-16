import { ShopAction } from "./shop-action-types.js";

const INIT_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: ""
};
const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ShopAction.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };

    case ShopAction.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      }

    case ShopAction.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      }

    default:
      return state;
  }
};

export default shopReducer;
