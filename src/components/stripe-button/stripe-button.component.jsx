import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
  console.log("token:", token);
  alert("Payment successful");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //in cents
  const publishableKey = "pk_test_kbNPuyde0iA63ld3iYOpwKNs00gPnOzgdh";

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN clothing ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      amount={priceForStripe}
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onToken} // on success callback
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
