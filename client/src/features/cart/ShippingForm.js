import React,{useState} from 'react';
import {Form,Container, Nav} from "react-bootstrap"
import StripeContainer from './StripeContainer';

function ShippingForm({name,setName,handleAddressForm,address,showItem}) {
//   console.log(address)
const[showPayment,setShowPayment]=useState(false)
  return (<>
      {showPayment===false?<>
       <Form>
        <Form.Group className="form-group">
        <h1>Shipping Address</h1>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <Form.Label>Line1</Form.Label>
          <Form.Control type="text" name="line1" required placeholder="line1" value={address.line1} onChange={handleAddressForm}/>
          <Form.Label>Line2</Form.Label>
          <Form.Control type="text" name="line2" placeholder="line2" value={address.line2} onChange={handleAddressForm}/>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="city" required placeholder="city name" value={address.city} onChange={handleAddressForm}/>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" name="postal_code" required placeholder="postal code" value={address.postal_code} onChange={handleAddressForm}/>
          <Form.Label>State</Form.Label>
          <Form.Control type="text" name="state" required placeholder="state" value={address.state} onChange={handleAddressForm}/>
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" name="country" placeholder="country" value={address.country} onChange={handleAddressForm}/>
          <div className="d-grid gap-2" style={{marginTop:"5px"}}>
        <button onClick={()=>setShowPayment(true)}>Proceed to payment</button>
        </div>
        </Form.Group>
        </Form>   
  </>:
  <StripeContainer name={name} address={address}></StripeContainer>}
  </>)
}

export default ShippingForm;
