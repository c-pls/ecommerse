import React from "react";

import { CustomButton } from "../../custom-button/custom-button";
import { addItem } from "../../../graphql/operation/cart/addItemToCart";
import { CartItem, CollectionItemProps } from "../../../model/model";

import "./collection-item.scss";

interface Props {
  item: CollectionItemProps;
}

export const CollectionItem = ({ item }: Props) => {
  const { id, name, price, imageUrl } = item;
  const itemToAdd: CartItem = {
    ...item,
    quantity: 1,
  };

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
          addItem(itemToAdd);
        }}
        inverted={true}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};
