import React from "react";

import { BallTriangle } from "react-loader-spinner";
import "./with-spinner.scss";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading }) => {
    return isLoading ? (
      <div className="spinner">
        <BallTriangle
          heigth="100"
          width="100"
          color="#00BFFF"
          ariaLabel="loading"
        />
      </div>
    ) : (
      <WrappedComponent />
    );
  };
  return Spinner;
};

export default WithSpinner;
