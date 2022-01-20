import React from "react";

import { useDispatch } from "react-redux";
import { CustomButton } from "../../custom-button/custom-button";
import { addItem } from "../../../redux/cart/cart-action.js";

import "./collection-item.scss";

interface Props {
  item: {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
  };
}

export const CollectionItem = ({ item }: Props) => {
  const { name, price, imageUrl } = item;
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
        toggleFunction={() => {
          console.log("Hello");
          dispatch(addItem(item));
        }}
        inverted={true}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};
