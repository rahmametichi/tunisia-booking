import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../redux/actions/orderActions";
import { useHistory } from "react-router-dom";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

function Checkout({ amount }) {
  //const { loading , success , error} = orderstate

  const dispatch = useDispatch();

  function tokenHander(token) {
    dispatch(placeOrder(token, amount));
  }

  function validation() {
    if (!localStorage.getItem("JWT")) {
      alert("Vous devez se connecter d'abord");
      window.location.href = "/login";
    }
  }

  return (
    <div>
      {/* {loading && <Loading/>}
      {error && <Error/>} */}

      <StripeCheckout
        amount={amount * 100}
        shippingAddress
        token={tokenHander}
        stripeKey={
          "pk_test_51L7haGEDWZpQCiilU9QvwLNoWHiif6ofMZiGCOHRPokePcUccqvP9J7eyJjM7LjIwalxORDHWhEexui5kMOiLEIP00lA96Bk3W"
        }
        currency="TTD"
      >
        <button
          style={{
            cursor: "pointer",
            border: "2px solid white",
            padding: "15px",
            width: "150px",
            fontWeight: "300",
            marginTop: "15px",
            marginLeft: "40%",
            backgroundColor: "#cb896a",
            color: "black",
          }}
          onClick={validation}
        >
          Payer
        </button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
