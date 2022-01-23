import { updateCart } from "./updateCart";
import { cartItemsVar } from "../../cache";
import { CartItem } from "../../../model/model";

export const clearItem = (itemToClear: CartItem) => {
  const cartItems = cartItemsVar();
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== itemToClear.id
  );
  updateCart(newCartItems);
};
