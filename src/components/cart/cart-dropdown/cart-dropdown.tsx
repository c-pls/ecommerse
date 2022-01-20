import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { CustomButton } from "../../custom-button/custom-button";
import { CartItem } from "../cart-item/cart-item";

import { selectCartItems } from "../../../redux/cart/cart-selector.js";
import { toggleDropDown } from "../../../redux/cart/cart-action.js";

import "./cart-dropdown.scss";

interface CartItemProps {
  id: number;
  name: string;
  imageUrl: string;
  quantity: number;
  price: number;
}

export const CartDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems: Array<CartItemProps> = useSelector(selectCartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-string">Your cart is empty</span>
        )}
      </div>
      {cartItems.length ? (
        <CustomButton
          onClick={() => {
            navigate("/checkout");
            dispatch(toggleDropDown());
          }}
        >
          Go to Checkout
        </CustomButton>
      ) : null}
    </div>
  );
};
