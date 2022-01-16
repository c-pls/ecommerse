import React from "react";

import axios from "axios";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KHQULIha2TOW87OHGNc1DGluwhHXSp1OB4cx6shNswfWAja6n9QDimaAKdcJhT3iqrr3c5n8Ycs4PWiNfBlv6Bg00QkxGu5vY";

  const onToken = (token) => {
    console.log(token);
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        console.log(response);
        alert("Payment success");
      })
      .catch((err) => {
      console.log(err)
        alert("Fail")
      });
    // alert("Success")
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CP"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
