import React from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import InputLabelAnimated from "./../../components/input-label-animated/input-label-animated.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

class SigInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { signInWithEmail } = this.props;
    const { email, password } = this.state;
    signInWithEmail(email, password);
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [`${name}`]: value
    });
  };

  render() {
    const { signInWithGoogle } = this.props;
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
            <SubmitButton
              type="submit"
              onClick={this.handleSubmit.bind(this)}
              label="Sign In"
            />
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
  }
}

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithEmail: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SigInPage);
