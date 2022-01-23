import React from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { Link, useNavigate } from "react-router-dom";

import { CartIcon } from "../cart/cart-icon/cart-icon";
import { CartDropDown } from "../cart/cart-dropdown/cart-dropdown";

import "./header.scss";
import { auth } from "../../firebase/firebase-utils";
import { useReactiveVar } from "@apollo/client";
import { cartHiddenVar, cartItemsVar, userVar } from "../../graphql/cache";

export const Header = () => {
  const currentUser = useReactiveVar(userVar);
  const hidden = useReactiveVar(cartHiddenVar);
  const navigate = useNavigate();
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
          <div
            className="option"
            onClick={() => {
              auth.signOut();
              navigate("/");
              userVar(null!);
              cartItemsVar([]);
            }}
          >
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
