import React from "react";
import { connect } from "react-redux";

import { CustomButton } from "../custom-button/custom-button";

import { addItem } from "../../redux/cart/cart-action.js";

import "./collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
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
          addItem(item);
        }}
        inverted={true}
      >
        {" "}
        Add to Cart
      </CustomButton>
      <button
        onClick={() => {
          addItem(item);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);