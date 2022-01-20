import React from "react";

import "./cart-item.scss";

interface Props {
  item: {
    id: number;
    name: string;
    imageUrl: string;
    quantity: number;
    price: number;
  };
}

export const CartItem = ({ item }: Props) => {
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
