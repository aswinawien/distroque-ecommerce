import React from "react";
import { withRouter } from "react-router-dom";

import Logo from "../../assets/distroque.svg";
import "./header.styles.scss";
import ButtonClear from "../button-clear/button-clear.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ authenticated, history, handleOpenModal }) => {
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
                color={`black`}
                onClick={() => {
                  history.push("/sign-in");
                }}
              />
              <ButtonClear
                title="Sign Up"
                color={`black`}
                onClick={() => history.push("/sign-up")}
              />
            </React.Fragment>
          ) : null}
          <ButtonClear
            title={`Shop`}
            color={`black`}
            onClick={() => history.push("/shop")}
          />
          {authenticated ? (
            <ButtonClear
              title="Sign Out"
              color={`black`}
              onClick={() => {
                auth.signOut();
                console.log("signed out!");
              }}
            />
          ) : null}
          <div onClick={handleOpenModal}>
            <CartIcon itemCount={0} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Header);
