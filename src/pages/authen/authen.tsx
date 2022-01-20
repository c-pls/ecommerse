import React from "react";
import { Login } from "../../components/authen/login/login";
import { Register } from "../../components/authen/register/register";

import "./authen.scss";

export const Authen = () => {
  return (
    <div className="authen">
      <Login />
      <Register />
    </div>
  );
};
