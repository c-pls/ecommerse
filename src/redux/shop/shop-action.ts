import { ShopActionType } from "./shop-constants";

export const fetchCollectionStart = () => ({
  type: ShopActionType.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionsMap: any) => ({
  type: ShopActionType.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = (errorMessage: string) => ({
  type: ShopActionType.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

// REDUX

// export const fetchCollectionAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionStart());

//     collectionRef
//       .get()
//       .then((snapShot) => {
//         const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
//         dispatch(fetchCollectionSuccess(collectionsMap));
//       })
//       .catch((error) => dispatch(fetchCollectionFailure(error.message)));
//   };
// };
