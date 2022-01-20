import React from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";

import { CartIcon } from "../cart/cart-icon/cart-icon";
import { CartDropDown } from "../cart/cart-dropdown/cart-dropdown";

import { selectCurrentUser } from "../../redux/user/user-selector.js";
import { selectCartHidden } from "../../redux/cart/cart-selector.js";

import { signOutStart } from "../../redux/user/user-action.js";

import "./header.scss";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};
