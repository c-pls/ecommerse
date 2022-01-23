import { CartItems } from "../../../model/model";
import { cartItemsVar, totalPriceVar } from "../../cache";

export const updateCart = (newCartItems: CartItems) => {
  cartItemsVar(newCartItems);
  totalPriceVar(updatePrice(newCartItems));
};

const updatePrice = (cartItems: CartItems) => {
  return cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
};
