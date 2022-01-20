import React from "react";

import { toggleDropDown } from "../../../redux/cart/cart-action.js";
import { ReactComponent as ShoppingBag } from "../../../assets/shopping-bag.svg";

import { selectCartItemsCount } from "../../../redux/cart/cart-selector.js";

import "./cart-icon.scss";
import { useDispatch, useSelector } from "react-redux";

export const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount: number = useSelector(selectCartItemsCount);
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleDropDown())}>
      <ShoppingBag />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
