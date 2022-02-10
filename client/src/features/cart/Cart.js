import React,{useEffect, useState} from 'react';
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import {MDBTable, MDBTableBody,MDBTableHead,} from 'mdbreact';
import StripeContainer from './StripeContainer';
import {Container, Nav,Col,Row} from "react-bootstrap"
import ShippingForm from './ShippingForm';
import { cartProductRemoved, totalAdded } from './cartsSlice';
import {useDispatch,useSelector} from "react-redux"
import { useParams,useNavigate } from "react-router-dom"

function Cart({currentUser}) {
// const cartId=currentUser.cart.id
const cartData=useSelector((state)=>state.carts.entities)
// const [total,setTotal]=useState(cartData.total_amount)
// const totalPrice=useSelector((state)=>state.carts.totalPrice)
// console.log(totalPrice)
// console.log(cartData)
const dispatch=useDispatch()
const navigate=useNavigate("/")
// console.log(totalPrice)
  console.log(cartData)
  //cartData.cart_products.map(x=>x.product).reduce((acc,p)=>acc+=p.price,0)
const[showItem,setShowItem]=useState(false)
// debugger
    const columns=[
      {
        label: '',
        field: 'img',
      },
      {
        label: <strong>Product</strong>,
        field: 'product'
      },
      {
        label: <strong>Color</strong>,
        field: 'color'
      },
      {
        label: <strong>Price</strong>,
        field: 'price'
      },
      {
        label: <strong>QTY</strong>,
        field: 'qty'
      },
      {
        label: <strong>Amount</strong>,
        field: 'amount'
      },
      {
        label: '',
        field: 'button'
      }
  ]
    var setTotal;
    const rows = [];
    {cartData? cartData.cart_products.map(row => {
       setTotal=cartData.total_amount
      function handleProductDelete(){
        setTotal=cartData.total_amount-(row.product.price*row.item_quantity)
        fetch(`/cart_products/${row.product.id}`,{
         method:"delete"
        })
      dispatch(cartProductRemoved(row.product.id))
      
      }
      return rows.push(
        {
        'img': <img src={row.images[0].image_url} alt="" className="img-fluid z-depth-0" />,
        'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.product.name}</strong></h5>, <p key={new
          Date().getDate} className="text-muted">no subtitle yet</p>],
        'color': row.product.color,
        'price': `$${row.product.price}`,
        'qty':
        <MDBInput type="number" default={row.item_quantity} value={row.item_quantity} className="form-control" style={{ width: "100px" }} />,
        'amount': <strong>${row.item_quantity * row.product.price}</strong>,
        'button':
        <MDBTooltip placement="top">
            <MDBBtn color="primary" size="sm" onClick={handleProductDelete}>
                X
            </MDBBtn>
            <div>Remove item</div>
        </MDBTooltip>
        }
      )
    }):<h1>Cart is Empty</h1>};
    // console.log(cartData.total_items)
//  cartData&&dispatch(totalAdded(cartData.cart_products.reduce((acc,x)=>acc+=x.product.price,0)))
    return (
     
      <Container style={{marginTop:"58px"}}>
    {cartData===undefined||cartData===null||cartData.total_items==0?
    <><h1 style={{marginTop:"100px"}} >Cart is empty please add a product</h1> <Nav.Link href="/">back to shopping</Nav.Link></>
    :<>
    <MDBRow className="my-2" center >
      <MDBCard className="w-100">
        <MDBCardBody>
          <MDBTable className="product-table">
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
            <MDBTableBody rows={rows} />
          </MDBTable>
          <Row className="justify-content-md-center">
      <Col xs lg="7">
     {cartData && <h3>Total:- ${setTotal}</h3>}
      <Nav.Link href="/checkout"><button>Checkout</button></Nav.Link> 
        </Col>
        </Row>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>
    </>}
    </Container>
    
    );
  }

export default Cart
