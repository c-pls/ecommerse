import React from "react";
import { CartItem } from "../../../model/model";
import "./cart-item.scss";

interface Props {
  item: CartItem;
}

export const CartItemComponent = ({ item }: Props) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
