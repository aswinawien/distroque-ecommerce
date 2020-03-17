import React from "react";
import { connect } from "react-redux";

import "./sign-up.styles.scss";
import InputLabelAnimated from "../../components/input-label-animated/input-label-animated.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import { signUpStart } from "../../redux/user/user.actions";

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
    const { signUpStart } = this.props;
    const { email, password, confirmPassword, displayName } = this.state;
    if (confirmPassword !== password) {
      alert("Password doesn't match!");
      return;
    }
    signUpStart({ email, password, displayName });
    this.setState({
      email: "",
      password: "",
      confirmPassword: "",
      displayName: ""
    });
  };

  handleChange = name => event => {
    const { value } = event.target;
    this.setState({
      [name]: value
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
              onChange={this.handleChange("displayName")}
              name={"displayName"}
              required
              type={"text"}
              value={this.state.displayName}
              id={"display-name-input"}
            />
            <InputLabelAnimated
              label={"Email"}
              onChange={this.handleChange("email")}
              name={"email"}
              required
              type={"email"}
              value={this.state.email}
              id={"email-input"}
            />
            <InputLabelAnimated
              label={"Password"}
              onChange={this.handleChange("password")}
              name={"password"}
              required
              type={"password"}
              value={this.state.password}
              id={"password-input"}
            />
            <InputLabelAnimated
              label={"Confirm Password"}
              onChange={this.handleChange("confirmPassword")}
              name={"confirmPassword"}
              required
              type={"password"}
              value={this.state.confirmPassword}
              id={"confirm-password-input"}
            />
            <SubmitButton
              onClick={this.handleSubmit.bind(this)}
              inverted={false}
              label="Sign Up"
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUpPage);
