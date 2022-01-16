import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";

import CartIcon from "../cart/cart-icon/cart-icon.jsx";
import CartDropDown from "../cart/cart-dropdown/cart-dropdown.jsx";

import { selectCurrentUser } from "../../redux/user/user-selector.js";
import { selectCartHidden } from "../../redux/cart/cart-selector.js";

import {signOutStart} from '../../redux/user/user-action.js'

import "./header.scss";

const Header = ({ currentUser, hidden, dispatch }) => {
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
          <div className="option" onClick={() => dispatch(signOutStart()) }>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
