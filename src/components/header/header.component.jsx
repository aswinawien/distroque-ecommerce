import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Logo from "../../assets/distroque.svg";
import "./header.styles.scss";
import ButtonClear from "../button-clear/button-clear.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";

const Header = ({ currentUser, history, hidden }) => {
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
          {!currentUser ? (
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
          {currentUser ? (
            <ButtonClear
              title="Sign Out"
              color={`black`}
              onClick={() => {
                auth.signOut();
                console.log("signed out!");
              }}
            />
          ) : null}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, null)(withRouter(Header));
