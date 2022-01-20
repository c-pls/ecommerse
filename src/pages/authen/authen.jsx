import React from "react";
import { Login } from "../../components/authen/login/login.tsx";
import { Register } from "../../components/authen/register/register";

import "./authen.scss";

const Authen = () => {
  return (
    <div className="authen">
      <Login />
      <Register />
    </div>
  );
};

export default Authen;
