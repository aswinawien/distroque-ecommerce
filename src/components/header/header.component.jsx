import React from "react";
import { withRouter } from "react-router-dom";

import Logo from "../../assets/distroque.svg";
import "./header.styles.scss";
import ButtonClear from "../button-clear/button-clear.component";

const Header = ({ authenticated, history }) => {
  return (
    <React.Fragment>
      <div className="header">
        <img
          className={"logo"}
          src={Logo}
          alt={"distroque-logo"}
          onClick={() => history.push(`/`)}
        />

        <div className="menu-container">
          {!authenticated ? (
            <React.Fragment>
              <ButtonClear
                title="Sign In"
                color={`navy`}
                onClick={() => {
                  history.push("/sign-in");
                }}
              />
              <ButtonClear
                title="Sign Up"
                color={`orange`}
                onClick={() => history.push("/sign-up")}
              />
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Header);