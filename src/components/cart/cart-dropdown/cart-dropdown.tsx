import React from "react";

import { useNavigate } from "react-router-dom";

import { CustomButton } from "../../custom-button/custom-button";
import { CartItemComponent } from "../cart-item/cart-item";

import "./cart-dropdown.scss";
import { useReactiveVar } from "@apollo/client";
import { cartItemsVar } from "../../../graphql/cache";
import { toggleCart } from "../../../graphql/operation/cart/toggleHidden";
import { CartItems } from "../../../model/model";

export const CartDropDown = () => {
  const navigate = useNavigate();
  const cartItems: CartItems = useReactiveVar(cartItemsVar);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItemComponent key={item.id} item={item} />
          ))
        ) : (
          <span className="empty-string">Your cart is empty</span>
        )}
      </div>
      {cartItems.length ? (
        <CustomButton
          onClick={() => {
            navigate("/checkout");
            toggleCart();
          }}
        >
          Go to Checkout
        </CustomButton>
      ) : null}
    </div>
  );
};
