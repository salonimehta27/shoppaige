import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";


export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    fetch("/clearCart",{
     method:"delete"
    })
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:4000/paymentComplete",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {/* <ShippingForm name={name} setName={setName} address={address} handleAddressForm={handleAddressForm} handleSubmit={handleOnSubmit}/> */}
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}





// import React,{useState} from 'react';
// import {CardElement,PaymentElement,useElements,useStripe} from "@stripe/react-stripe-js"
// import axios from "axios"

// const CARD_OPTIONS = {
// 	iconStyle: "solid",
// 	style: {
// 		base: {
// 			iconColor: "#c4f0ff",
// 			color: "#fff",
// 			fontWeight: 500,
// 			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
// 			fontSize: "16px",
// 			fontSmoothing: "antialiased",
// 			":-webkit-autofill": { color: "#fce883" },
// 			"::placeholder": { color: "#87bbfd" }
// 		},
// 		invalid: {
// 			iconColor: "#ffc7ee",
// 			color: "#ffc7ee"
// 		}
// 	}
// }

// function PaymentForm() {
// const [success,setSuccess]=useState(false)
// const stripe=useStripe()
// const elements=useElements()
//  const handleSubmit= async(e)=>{
//     //  debugger
//      e.preventDefault()
    
//      const{error,paymentMethod}= await stripe.createPaymentMethod({
//          type:"card",
//          card: elements.getElement(CardElement)
//      })
//     //  let chargeToken= await stripe.createToken({paymentMethod})
//  if(!error){
//      try {
//          const {id}=paymentMethod
//         const response= await axios.post("/payment",{
//             amount: 1000,
//             id,
//             currency:"usd",
//             // token:chargeToken.token.id
            
//         })
//         if(response.data.success){
//             console.log("successful payment")
//             setSuccess(true)
//         }
    
//     }
//         catch (error) {
//          console.log("Error",error)
//      }
//  }else {
//      console.log(error.message)
//  }
// }
//   return <>
//     {!success?
//     <form onSubmit={handleSubmit}>
//         <PaymentElement/>
//         <fieldset className="FormGroup">
//          <div className="FormRow">
//              <CardElement options={CARD_OPTIONS}/>
//          </div>
//         </fieldset>
//         <button className="FormRow" style={{justifyContent:"center"}}>Pay</button>
//     </form>
//     : 
//     <div>
//         <h2>You just Bought a sweet spatula</h2>
//     </div>
//     }
//   </>;
// }

// export default PaymentForm;
