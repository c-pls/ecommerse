import React, { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header/header.jsx";
import { HomePage } from "./pages/homepage/homepage";
import { Authen } from "./pages/authen/authen";
import { ShopPage } from "./pages/shop/shop";
import { CheckOutPage } from "./pages/checkout/checkout";

import { selectCurrentUser } from "./redux/user/user-selector.js";

import { checkUserSession } from "./redux/user/user-action.js";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={!currentUser ? <Authen /> : <Navigate to="/" />}
        />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </div>
  );
};
