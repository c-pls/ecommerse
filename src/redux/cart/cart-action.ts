import { CartActionType, CartItem } from "./cart-constants";

export const toggleDropDown = () => ({
  type: CartActionType.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item: CartItem) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});

export const removeItem = (item: CartItem) => ({
  type: CartActionType.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: CartItem) => ({
  type: CartActionType.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionType.CLEAR_CART,
});
