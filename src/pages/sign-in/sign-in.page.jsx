import React from "react";

import "./sign-in.styles.scss";

import InputLabelAnimated from "./../../components/input-label-animated/input-label-animated.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { Redirect } from "react-router-dom";

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
    const { email, password } = this.state;
    await auth.signInWithEmailAndPassword(email, password).then(res => {
      // const { from } = this.props.location.state;
      // if (from !== null) {
      //   return <Redirect to={from} />;
      // } else {
      return <Redirect to="/" />;
      // }
    });
    this.setState({
      email: "",
      password: ""
    }).catch(e => {
      console.log("error logging in user with email and password", e.message);
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [`${name}`]: value
    });
  };

  render() {
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
              onClick={this.handleSubmit.bind(this)}
              label="Sign In"
            />
            <SubmitButton
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

export default SigInPage;
