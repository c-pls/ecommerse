import React from "react";

import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selector";

import { CheckOutItem } from "../../components/checkout-item/checkout-item";

import { StripeCheckoutButton } from "../../components/stripe-button/stripe-button";

import "./checkout.scss";

interface CartItemProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

export const CheckOutPage = () => {
  const cartItems: CartItemProps[] = useSelector(selectCartItems);
  const totalPrice: number = useSelector(selectCartTotal);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${totalPrice}</div>

      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};
