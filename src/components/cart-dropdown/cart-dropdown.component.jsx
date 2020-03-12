import React from "react";

import "./cart-dropdown.styles.scss";
import SubmitButton from "../submit-button/submit-button.component";

const CartDropdown = () => (
  <React.Fragment>
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <SubmitButton label="GO TO CHECKOUT" />
    </div>
  </React.Fragment>
);

export default CartDropdown;
