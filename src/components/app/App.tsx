import React, { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { Header } from "../header/header";
import { HomePage } from "../../pages/homepage/homepage";
import { Authen } from "../../pages/authen/authen";
import { ShopPage } from "../../pages/shop/shop";
import { CheckOutPage } from "../../pages/checkout/checkout";

import { auth, createUserProfile } from "../../firebase/firebase-utils";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { User } from "../../model/model";
import { userVar } from "../../graphql/cache";

export const App = () => {
  const currentUser = userVar();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth: any) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth, null);
        if (userRef) {
          userRef.onSnapshot((snapShot: any) => {
            const user: User = {
              id: snapShot.id,
              ...snapShot.data(),
            };
            userVar(user);
          });
        }
      }
    });
    return () => unsubscribe();
  }, []);

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
