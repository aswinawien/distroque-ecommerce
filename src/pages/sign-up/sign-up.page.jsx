import React from "react";

import "./sign-up.styles.scss";
import InputLabelAnimated from "../../components/input-label-animated/input-label-animated.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import { createUserProfileDocument, auth } from "../../firebase/firebase.utils";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { password, confirmPassword, email, displayName } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        errorPassword: "Password must be matched!"
      });
      alert(this.state.errorPassword);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorPassword: ""
      });
    } catch (e) {
      console.error("create user email and password error", e.message);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [`${name}`]: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="sign-up">
          <span className="title">Sign Up Page</span>
          <form>
            <InputLabelAnimated
              label={"displayName"}
              onChange={this.handleChange.bind(this)}
              name={"displayName"}
              required
              type={"text"}
              value={this.state.displayName}
              id={"display-name-input"}
            />
            <InputLabelAnimated
              label={"Email"}
              onChange={this.handleChange.bind(this)}
              name={"email"}
              required
              type={"email"}
              value={this.state.email}
              id={"email-input"}
            />
            <InputLabelAnimated
              label={"Password"}
              onChange={this.handleChange.bind(this)}
              name={"password"}
              required
              type={"password"}
              value={this.state.password}
              id={"password-input"}
            />
            <InputLabelAnimated
              label={"Confirm Password"}
              onChange={this.handleChange.bind(this)}
              name={"confirmPassword"}
              required
              type={"password"}
              value={this.state.confirmPassword}
              id={"confirm-password-input"}
            />
            <SubmitButton
              onChange={this.handleSubmit.bind(this)}
              inverted={false}
              label="Sign Up"
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUpPage;
