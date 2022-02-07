import React,{useState} from 'react'
// import {Card,Button,Col,Row} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import { currentUserAdded } from '../signup/signinSlice';
import { useSelector } from 'react-redux';
import ProductDetails from './ProductDetails'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBRow, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon,MDBCol} from "mdb-react-ui-kit";
import "./product.scss"
import { Container,Row,Col } from 'react-bootstrap';
import { cartProductsAdded } from '../cart/cartsSlice';
function DisplayProducts({product,setCurrentProduct,currentUser}) {
    const[errors,setErrors]=useState([])
    // const[productAdded,setProductAdded]=useState([])
    // const currentUser=useSelector((state)=>state.currentUser.entitites)
    const navigate=useNavigate()
    function handleProductPage(){
        navigate(`/products/${product.id}`)
        setCurrentProduct(product)
    }

    function handleAddToCart(){
      fetch("/addtocart",{
        method:"post",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          cart_id:currentUser.cart.id,
          product_id:product.id,
          item_quantity:1
        })
      }).then(res=>res.json())
      .then(data=>console.log(data))
    }
    return (
    
      <div className="card">
        <div className="card__body" onClick={handleProductPage}>
          <img className="card__image"src={product.images[0].image_url}/>
          <h5 className="card__title">{product.name}</h5>
          <p className="card__description">${product.price}</p>
          
          <p className="card__description">{product.description.length>50?`${product.description.substring(0,50)}...`:product.description}</p>
        </div>
        {product!==null&&currentUser!==null&&product.user_id===currentUser.id?<button disabled> {product.quantity===0?"OUT OF STOCK":"ADD TO CART"}</button>:<button className="card__btn" onClick={handleAddToCart}>ADD TO CART</button>}
      </div>
    )
}

export default DisplayProducts