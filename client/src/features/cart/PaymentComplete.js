import React from 'react';
import { Nav } from 'react-bootstrap';

function PaymentComplete() {
  return <div>
      <h1>Thank you. Your order has been processed</h1>
      <Nav.Link href="/">Continue Shopping</Nav.Link>
  </div>;
}

export default PaymentComplete;
