import React from "react";
import { connect } from "react-redux";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from "./cart-icon.styles";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
