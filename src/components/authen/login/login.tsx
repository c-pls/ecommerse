import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

import { CustomButton } from "../../custom-button/custom-button";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../../redux/user/user-action.js";

import "./login.scss";

interface FormValues {
  email: string;
  password: string;
}

export const Login = () => {
  const { register, handleSubmit, watch, reset } = useForm<FormValues>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(emailSignInStart(data));
    reset();
  };

  return (
    <div className="login">
      <h2>I have already have a account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit(onSubmit)}>
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
            type={"password"}
            required
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

        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>

          <CustomButton
            type="button"
            toggleFunction={() => dispatch(googleSignInStart())}
            isGoogleSignIn={true}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
