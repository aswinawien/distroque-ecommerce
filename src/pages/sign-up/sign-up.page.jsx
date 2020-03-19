import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-up.styles.scss";
import InputLabelAnimated from "../../components/input-label-animated/input-label-animated.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import { signUpStart } from "../../redux/user/user.actions";

const SignUpPage = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorPassword: ""
  });

  const { email, password, confirmPassword, displayName } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (confirmPassword !== password) {
      alert("Password doesn't match!");
      return;
    }
    signUpStart({ email, password, displayName });
    setUserCredentials({
      email: "",
      password: "",
      confirmPassword: "",
      displayName: ""
    });
  };

  const handleChange = name => event => {
    const { value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  return (
    <React.Fragment>
      <div className="sign-up">
        <span className="title">Sign Up Page</span>
        <form>
          <InputLabelAnimated
            label={"displayName"}
            onChange={handleChange("displayName")}
            name={"displayName"}
            required
            type={"text"}
            value={displayName}
            id={"display-name-input"}
          />
          <InputLabelAnimated
            label={"Email"}
            onChange={handleChange("email")}
            name={"email"}
            required
            type={"email"}
            value={email}
            id={"email-input"}
          />
          <InputLabelAnimated
            label={"Password"}
            onChange={handleChange("password")}
            name={"password"}
            required
            type={"password"}
            value={password}
            id={"password-input"}
          />
          <InputLabelAnimated
            label={"Confirm Password"}
            onChange={handleChange("confirmPassword")}
            name={"confirmPassword"}
            required
            type={"password"}
            value={confirmPassword}
            id={"confirm-password-input"}
          />
          <SubmitButton
            onClick={handleSubmit}
            inverted={false}
            label="Sign Up"
          />
        </form>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUpPage);
