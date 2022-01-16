import React from "react";

import { connect } from "react-redux";

import useForm from "../../form-input/useForm.jsx";
import FormInput from "../../form-input/form-input.jsx";

import CustomButton from "../../custom-button/custom-button.jsx";


import { googleSignInStart, emailSignInStart } from "../../../redux/user/user-action.js";

import "./login.scss";

// const handleSubmit = async (e, values, clearForm) => {
//   e.preventDefault();
//   const { email, password } = values;

//   try {
//     await auth.signInWithEmailAndPassword(email, password);
//     clearForm();
//   } catch (e) {
//     console.log(e);
//   }
// };

const Login = ({ dispatch }) => {
  const [values, handleChange, clearForm] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e, values, clearForm) => {
    e.preventDefault();
    // const { email, password } = values;
    clearForm();
    try {
      dispatch(emailSignInStart(values))
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login">
      <h2>I have already have a account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={(e) => handleSubmit(e, values, clearForm)}>
        <FormInput
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          label="Email"
          autoComplete="on"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          label="Password"
          autoComplete="new-password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"  > Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn={true}
          >
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form >
    </div >
  );
};



export default connect()(Login);
