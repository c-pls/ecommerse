import * as constants from "./shop-constants";

const shopReducer = (
  state = constants.INIT_STATE,
  action: constants.ShopAction
) => {
  switch (action.type) {
    case constants.ShopActionType.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };

    case constants.ShopActionType.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };

    case constants.ShopActionType.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
