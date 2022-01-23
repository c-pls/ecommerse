import { cartItemsVar } from "../../cache";
import { CartItem, CartItems } from "../../../model/model";

import { updateCart } from "./updateCart";

export const removeItem = (itemToRemove: CartItem) => {
  const cartItems = cartItemsVar();
  const newCartItems = removeItemFromCart(cartItems, itemToRemove);
  updateCart(newCartItems);
};

// utils function
const removeItemFromCart = (cartItems: CartItems, removeItem: CartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === removeItem.id
  );
  if (existingCartItem) {
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
    }
    return cartItems.map((cartItem) =>
      cartItem.id === removeItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return [];
};
