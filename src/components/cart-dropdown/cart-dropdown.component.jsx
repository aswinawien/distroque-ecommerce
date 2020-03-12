import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import SubmitButton from "../submit-button/submit-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems, history }) => (
  <React.Fragment>
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your Cart is empty</span>
        )}
      </div>
      <SubmitButton
        label="GO TO CHECKOUT"
        onClick={() => history.push("/checkout")}
      />
    </div>
  </React.Fragment>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
// Passing the props argument : Out <-- Inside
export default withRouter(connect(mapStateToProps)(CartDropdown));
