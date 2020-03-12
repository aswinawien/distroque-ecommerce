import React from "react";
import { connect } from "react-redux";

import CancelIcon from "../../assets/cancel.svg";
import {
  removeCartItem,
  decreaseCartItem,
  addCartItem
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  removeCartItem,
  decreaseCartQuantity,
  addCartQuantity
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <React.Fragment>
      <tr className="checkout-item">
        <td>
          <img src={imageUrl} alt={name} />
        </td>
        <td>
          <span>{name}</span>
        </td>
        <td>
          <span className="quantity">
            <span
              className="arrow"
              onClick={() => decreaseCartQuantity(cartItem)}
            >
              &#10094;
            </span>
            <span className="value">{quantity}</span>
            <span className="arrow" onClick={() => addCartQuantity(cartItem)}>
              &#10095;
            </span>
          </span>
        </td>
        <td>
          <span>{price}</span>
        </td>
        <td>
          <span
            className="remove-button"
            onClick={() => removeCartItem(cartItem)}
          >
            &#10005;
          </span>
        </td>
      </tr>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  removeCartItem: item => dispatch(removeCartItem(item)),
  decreaseCartQuantity: item => dispatch(decreaseCartItem(item)),
  addCartQuantity: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
