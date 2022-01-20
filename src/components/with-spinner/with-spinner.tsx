import React from "react";

import { BallTriangle } from "react-loader-spinner";
import "./with-spinner.scss";

export const WithSpinner = (
  WrappedComponent: () => JSX.Element,
  isLoading: boolean
) => {
  console.log(isLoading);
  return isLoading ? (
    <div className="spinner">
      <BallTriangle
        height="100"
        width="100"
        color="#00BFFF"
        ariaLabel="loading"
      />
    </div>
  ) : (
    <WrappedComponent />
  );
};
