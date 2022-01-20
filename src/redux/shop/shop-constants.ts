export enum ShopActionType {
  FETCH_COLLECTION_START = "FETCH_COLLECTION_START",
  FETCH_COLLECTION_SUCCESS = "FETCH_COLLECTION_SUCCESS",
  FETCH_COLLECTION_FAILURE = "FETCH_COLLECTION_FAILURE",
}

export const INIT_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: "",
};

export interface ShopAction {
  type: string;
  payload?: any;
}

export interface GlobalState {
  shop: { collections: Collections<Collection> };
}

interface Item {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface Collection {
  id: number;
  title: string;
  items: Item[];
  routeName: string;
}

interface Collections<Collection> {
  [key: string]: Collection;
}
