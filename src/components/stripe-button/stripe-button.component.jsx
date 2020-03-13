import React from "react";
import StripeCheckout from "react-stripe-checkout";

import Logo from "../../assets/distroque-logo.png";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `pk_test_FcnRNBdfe2A2rNyL8hgmH3dx00XxLnoU3i`;
  const onToken = token => {
    alert(`Payment Successful!`);
  };
  return (
    <StripeCheckout
      label={"Pay Now"}
      name={`Distroque Ltd.`}
      billingAddress
      shippingAddress
      image={Logo}
      currency={`USD`}
      panelLabel={"Pay Now"}
      amount={priceForStripe}
      token={onToken}
      description={`Your total is $${price}`}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
