import { cartItemsVar } from "../../cache";
import { CartItem, CartItems } from "../../../model/model";
import { updateCart } from "./updateCart";

export const addItem = (itemToAdd: CartItem) => {
  const cartItems = cartItemsVar();
  const newCartItems = addItemToCart(cartItems, itemToAdd);
  updateCart(newCartItems);
};

// utils function
export const addItemToCart = (cartItems: CartItems, addedItem: CartItem) => {
  const isItemAlreadyExisted = cartItems.find(
    (item) => item.id === addedItem.id
  );

  if (isItemAlreadyExisted) {
    return cartItems.map((item) =>
      item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  addedItem.quantity = 1;
  return [...cartItems, { ...addedItem, quantity: 1 }];
};
