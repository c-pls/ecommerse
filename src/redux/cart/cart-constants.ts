export enum CartActionType {
  TOGGLE_CART_DROPDOWN = "TOGGLE_CART_DROPDOWN",
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

const initCartItems: CartItem[] = [];

export const INIT_STATE = {
  hidden: true,
  cartItems: initCartItems,
};

export interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  quantity: number;
  price: number;
}

export interface CartAction {
  type: string;
  payload?: any;
}

export interface GlobalState {
  cart: {
    hidden: boolean;
    cartItems: CartItem[];
  };
}
