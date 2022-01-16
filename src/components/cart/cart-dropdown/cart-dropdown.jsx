import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { useNavigate } from "react-router-dom";

import CustomButton from "../../custom-button/custom-button.jsx";
import CartItem from "../cart-item/cart-item.jsx";

import { selectCartItems } from "../../../redux/cart/cart-selector.js";
import { toggleDropDown } from "../../../redux/cart/cart-action.js";

import "./cart-dropdown.scss";

const CartDropDown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-string">Your cart is empty</span>
        )}
      </div>
      {cartItems.length ? (
        <CustomButton
          onClick={() => {
            navigate("/checkout");
            dispatch(toggleDropDown());
          }}
        >
          Go to Checkout
        </CustomButton>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
