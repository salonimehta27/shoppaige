import React,{useEffect,useState} from 'react';
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY="pk_test_51KHMZ6LX7eA72NUef0g8uVDUzZ0YhjoRwzJIdRRF2j4Tb0snsrujR0DUu4b1uR3c1ZP3FKZoC7IMTJHfcdzBfCuL00TR6UDKeB"
const stripeTestPromise=loadStripe(PUBLIC_KEY)
function StripeContainer() {
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
       
      fetch("/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({amount:1000,currency:"usd"}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
  
    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };
  
    return (
      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripeTestPromise}>
            <PaymentForm/>
          </Elements>
        )}
      </div>
    );
//   return (
//   <Elements stripe={stripeTestPromise}>
//       <PaymentForm/>
//   </Elements>
//   )


}

export default StripeContainer;
