import React from "react";
import "./custom-button.scss";
interface Props {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  children?: string;
  type?: "submit" | "reset" | "button" | undefined;
  toggleFunction?: (param: any) => void;
}

export const CustomButton = ({
  isGoogleSignIn,
  inverted,
  children,
  type,
  toggleFunction,
}: Props) => {
  return (
    <button
      type={type}
      onClick={toggleFunction}
      className={`${isGoogleSignIn ? "google-sign-in" : ""}
        ${inverted ? "inverted" : ""}
              custom-button`}
    >
      {children}
    </button>
  );
};
