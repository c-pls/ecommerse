import React from "react";

import { Triangle } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Triangle color="#00BFFF" height={80} width={80} />
    </div>
  );
};
