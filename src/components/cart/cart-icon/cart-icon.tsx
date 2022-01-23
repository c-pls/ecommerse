import React from "react";

import { ReactComponent as ShoppingBag } from "../../../assets/shopping-bag.svg";

import "./cart-icon.scss";
import { toggleCart } from "../../../graphql/operation/cart/toggleHidden";
import { useReactiveVar } from "@apollo/client";
import { cartItemsVar } from "../../../graphql/cache";

export const CartIcon = () => {
  const itemCount: number = useReactiveVar(cartItemsVar).length;

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingBag />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
