import React,{useState} from 'react';
import ShippingForm from './ShippingForm';
import {Container} from 'react-bootstrap'

function Checkout() {
  // }
  const[name,setName]=useState("")
  const[address,setAddress]=useState({
          line1:"",
          line2:"",
          city:"",
          postal_code:null,
          state:"",
          country:""
  })

  function handleAddressForm(e){
      setAddress({...address,[e.target.name]:e.target.value})
  }
  return <Container>

     <ShippingForm name={name} setName={setName} address={address} handleAddressForm={handleAddressForm}/>

  </Container>;
}

export default Checkout;
