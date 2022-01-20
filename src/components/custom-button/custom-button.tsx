import React from "react";
import "./custom-button.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

interface ButtonProps {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  children?: string;
  toggleFunction?: (param: any) => void;
}

export const CustomButton = (props: ButtonProps) => {
  const { isGoogleSignIn, inverted, children, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={`${isGoogleSignIn ? "google-sign-in" : ""}
        ${inverted ? "inverted" : ""}
              custom-button`}
    >
      {children}
    </button>
  );
};
