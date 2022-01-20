import React from "react";

import { useDispatch } from "react-redux";
import { CustomButton } from "../../custom-button/custom-button";
import { addItem } from "../../../redux/cart/cart-action";

import "./collection-item.scss";

interface Props {
  item: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
}

interface CartItem {
  quantity: number;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const CollectionItem = ({ item }: Props) => {
  const { id, name, price, imageUrl } = item;

  const itemToAdd: CartItem = {
    name: name,
    price: price,
    imageUrl: imageUrl,
    quantity: 1,
    id: id,
  };
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => {
          dispatch(addItem(itemToAdd));
        }}
        inverted={true}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};
