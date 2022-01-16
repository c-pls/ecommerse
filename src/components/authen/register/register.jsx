import React from "react";

import { connect } from "react-redux";

import { signUpStart } from "../../../redux/user/user-action.js";

import useForm from "../../form-input/useForm.jsx";
import FormInput from "../../form-input/form-input.jsx";
import CustomButton from "../../custom-button/custom-button.jsx";

import "./register.scss";

const Register = ({dispatch}) => {
  const [values, handleChange] = useForm({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    dispatch(signUpStart(values))
    // try {

    //   const { user } = await auth.createUserWithEmailAndPassword(email, password)

    //   await createUserProfile(user, { displayName })

    // } catch (e) {

    //   console.log(e)
    // }
    //
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={e => handleSubmit(e)}>
        <FormInput
          type="text"
          name="displayName"
          value={values.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">REGISTER</CustomButton>
      </form>
    </div>
  );
};

export default connect()(Register);
