import React from "react";

import { CheckOutItem } from "../../components/checkout-item/checkout-item";

import { StripeCheckoutButton } from "../../components/stripe-button/stripe-button";

import "./checkout.scss";
import { useReactiveVar } from "@apollo/client";
import { cartItemsVar, totalPriceVar } from "../../graphql/cache";

interface CartItemProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

export const CheckOutPage = () => {
  const cartItems: CartItemProps[] = useReactiveVar(cartItemsVar);
  const totalPrice: number = useReactiveVar(totalPriceVar);
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
