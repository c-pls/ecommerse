import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { auth, signInWithGoogle } from "../../../firebase/firebase-utils";

import { CustomButton } from "../../custom-button/custom-button";

import "./login.scss";

interface FormValues {
  email: string;
  password: string;
}

export const Login = () => {
  const { register, handleSubmit, watch, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      reset();
    } catch (error) {
      console.log(error);
    }
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
            onClick={signInWithGoogle}
            isGoogleSignIn={true}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
