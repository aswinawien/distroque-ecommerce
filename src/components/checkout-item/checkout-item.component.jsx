import React from "react";

import CancelIcon from "../../assets/cancel.svg";

const CheckoutItem = ({ imageUrl, name, quantity, price }) => (
  <React.Fragment>
    <tr className="checkout-item">
      <td>
        <img src={imageUrl} alt={name} />
      </td>
      <td>
        <span>{name}</span>
      </td>
      <td>
        <span>{quantity}</span>
      </td>
      <td>
        <span>{price}</span>
      </td>
      <td>
        <img src={CancelIcon} alt="remove-item" />
      </td>
    </tr>
  </React.Fragment>
);

export default CheckoutItem;
