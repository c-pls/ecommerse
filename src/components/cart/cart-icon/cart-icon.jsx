import React from "react";

import { connect } from "react-redux";
import { toggleDropDown } from "../../../redux/cart/cart-action.js";
import { ReactComponent as ShoppingBag } from "../../../assets/shopping-bag.svg";

import { selectCartItems } from "../../../redux/cart/cart-selector.js";

import "./cart-icon.scss";

const CartIcon = ({ toggleDropDown, cartItems }) => {
  return (
    <div className="cart-icon" onClick={() => toggleDropDown()}>
      <ShoppingBag />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropDown: () => dispatch(toggleDropDown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
