import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import SubmitButton from "../submit-button/submit-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => (
  <React.Fragment>
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <SubmitButton label="GO TO CHECKOUT" />
    </div>
  </React.Fragment>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
