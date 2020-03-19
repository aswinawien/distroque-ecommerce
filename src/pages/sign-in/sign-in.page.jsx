import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import InputLabelAnimated from "./../../components/input-label-animated/input-label-animated.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

const SigInPage = ({ signInWithEmail, signInWithGoogle }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    signInWithEmail(email, password);
    setUserCredentials({
      email: "",
      password: ""
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [`${name}`]: value
    });
  };

  return (
    <React.Fragment>
      <div className="sign-in">
        <span className="title">Sign In Page</span>
        <span className="subtitle">
          Sign in with your email and password or other methods
        </span>
        <form>
          <InputLabelAnimated
            label={"Email"}
            onChange={handleChange}
            name={"email"}
            required
            type={"email"}
            value={email}
            id={"email-input"}
          />
          <InputLabelAnimated
            label={"Password"}
            onChange={handleChange}
            name={"password"}
            required
            type={"password"}
            value={password}
            id={"password-input"}
          />
          <SubmitButton type="submit" onClick={handleSubmit} label="Sign In" />
          <SubmitButton
            type="button"
            onClick={signInWithGoogle}
            label="Sign in with Google"
            isGoogleSignIn
          />
        </form>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithEmail: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SigInPage);
