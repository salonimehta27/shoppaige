import React,{useState} from 'react';
import StripeContainer from './StripeContainer';
import {Container, Nav} from "react-bootstrap"
import ShippingForm from './ShippingForm';
function Cart() {
    const[showItem,setShowItem]=useState(false)
    // const[name,setName]=useState("")
    // const[address,setAddress]=useState({
    //         line1:"",
    //         line2:"",
    //         city:"",
    //         postal_code:null,
    //         state:"",
    //         country:""
    // })

    // function handleAddressForm(e){
    //     setAddress({...address,[e.target.name]:e.target.value})
    // }
  return (
  <div>
      <Container style={{marginTop:"25px"}}>
      <h3>$10.00</h3>
      <Nav.Link href="/checkout"><button>Checkout</button></Nav.Link>
      {/* {showItem&& <ShippingForm name={name} setName={setName} address={address} handleAddressForm={handleAddressForm}/>} */}
       
       
       </Container>
  </div>
  )
}

export default Cart;
