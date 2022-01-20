import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../../redux/user/user-action.js";
import { CustomButton } from "../../custom-button/custom-button";
import "./register.scss";

interface FormValues {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const { register, handleSubmit, watch, reset } = useForm<FormValues>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { password, confirmPassword } = data;
    reset();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    dispatch(signUpStart(data));
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <input
            className="form-input"
            required
            type="text"
            {...register("displayName")}
          />
          {watch("displayName") ? (
            <label
              className={`${
                watch("displayName").length ? "shrink" : "null"
              } form-input-label`}
            >
              {"Display Name"}
            </label>
          ) : null}
        </div>

        <div className="group">
          <input
            className="form-input"
            required
            type="email"
            {...register("email")}
          />
          {watch("email") ? (
            <label
              className={`${
                watch("email").length ? "shrink" : "null"
              } form-input-label`}
            >
              {"Email"}
            </label>
          ) : null}
        </div>

        <div className="group">
          <input
            className="form-input"
            required
            type="password"
            {...register("password")}
          />
          {watch("password") ? (
            <label
              className={`${
                watch("password").length ? "shrink" : "null"
              } form-input-label`}
            >
              {"Password"}
            </label>
          ) : null}
        </div>

        <div className="group">
          <input
            className="form-input"
            required
            type="password"
            {...register("confirmPassword")}
          />
          {watch("confirmPassword") ? (
            <label
              className={`${
                watch("confirmPassword").length ? "shrink" : "null"
              } form-input-label`}
            >
              {"Confirm Password"}
            </label>
          ) : null}
        </div>
        <CustomButton type="submit">REGISTER</CustomButton>
      </form>
    </div>
  );
};
