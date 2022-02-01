import React from 'react';
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
// import PaymentForm from "./"


const PUBLIC_KEY="pk_test_51KHMZ6LX7eA72NUef0g8uVDUzZ0YhjoRwzJIdRRF2j4Tb0snsrujR0DUu4b1uR3c1ZP3FKZoC7IMTJHfcdzBfCuL00TR6UDKeB"
const stripeTestPromise=loadStripe(PUBLIC_KEY)
function StripeContainer() {
  return (
  <Elements stripe={stripeTestPromise}>
      <PaymentForm/>
  </Elements>
  )


}

export default StripeContainer;
