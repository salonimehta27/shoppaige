import React,{useState} from 'react';
import ShippingForm from './ShippingForm';
import {Container,Row,Col} from 'react-bootstrap'

function Checkout({totalPrice,name,email,setEmail,setName,handleAddressForm,address,setAddress}) {
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
  return <Container style={{marginTop:"75px"}}>
     <Row className="justify-content-md-center">
    <Col xs lg="7">
     <ShippingForm name={name} setName={setName} email={email} setEmail={setEmail} totalPrice={totalPrice} address={address} handleAddressForm={handleAddressForm}/>
     </Col>
     </Row>
  </Container>;
}

export default Checkout;
