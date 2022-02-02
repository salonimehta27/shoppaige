import React,{useState} from 'react';
import StripeContainer from '../../StripeContainer';
import {Container} from "react-bootstrap"
function Cart() {
    const[showItem,setShowItem]=useState(false)
  return <div>
      <Container style={{marginTop:"25px"}}>
       {showItem?<StripeContainer/>:<><h3>$10.00</h3><button onClick={()=>setShowItem(true)}>Purchase</button></>}
       </Container>
  </div>;
}

export default Cart;
