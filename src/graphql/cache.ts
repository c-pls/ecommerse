import { User } from "./../model/model";
import { InMemoryCache, makeVar, ReactiveVar } from "@apollo/client";
import { CartItems } from "../model/model";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          read() {
            return userVar();
          },
        },
        cartHidden: {
          read() {
            return cartHiddenVar();
          },
        },
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
        totalPrice: {
          read() {
            return totalPriceVar();
          },
        },
      },
    },
  },
});

export const userVar = makeVar<User>(null!);
export const cartHiddenVar = makeVar(true);
export const cartItemsVar: ReactiveVar<CartItems> = makeVar<CartItems>([]);
export const totalPriceVar = makeVar(0);
