import React, { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect';

import Header from "./components/header/header.jsx";
import HomePage from "./pages/homepage/homepage.jsx";
import Authen from "./pages/authen/authen.jsx";
import ShopPage from "./pages/shop/shop.jsx";
import CheckOutPage from './pages/checkout/checkout.jsx'

import { selectCurrentUser } from './redux/user/user-selector.js'

import { checkUserSession } from './redux/user/user-action.js'

import './App.css'


const App = ({ currentUser, dispatch }) => {
  useEffect(() => {
    console.log("Hello")
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={!currentUser ? < Authen /> : <Navigate to="/" />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </div >
  );

};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})


export default connect(mapStateToProps)(App);

