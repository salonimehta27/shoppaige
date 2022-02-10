import React,{useState} from 'react'
// import {Card,Button,Col,Row} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import { currentUserAdded } from '../signup/signinSlice';
import { useSelector,useDispatch } from 'react-redux';
import ProductDetails from './ProductDetails'
import "./product.scss"
import { Container,Row,Col } from 'react-bootstrap';
import { cartProductsAdded } from '../cart/cartsSlice';
function DisplayProducts({product,setCurrentProduct,currentUser}) {
  const cartData=useSelector((state)=>state.carts.entities)
  const totalPrice=useSelector((state)=>state.carts.totalPrice)
  const dispatch=useDispatch()
  // console.log(totalPrice)
  //   console.log(cartData)
    const[errors,setErrors]=useState([])
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
          product_id:product.id,
          item_quantity:1
        })
      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
      dispatch(cartProductsAdded(data))})
    }
    return (
    
      <div className="card">
        <div className="card__body" onClick={handleProductPage}>
          <img className="card__image"src={product.images[0].image_url}/>
          <h5 className="card__title">{product.name}</h5>
          <p className="card__description">${product.price}</p>
          
          <p className="card__description">{product.description.length>50?`${product.description.substring(0,50)}...`:product.description}</p>
        </div>
        {product!==null&&product.quantity===0||currentUser!==null&&product.user_id===currentUser.id?<button disabled>{product.quantity===0?"OUT OF STOCK":"ADD TO CART"}</button>:<button className="card__btn" onClick={handleAddToCart}>ADD TO CART</button>}
        {/* {currentUser!==null&&product.user_id===currentUser.id?<button disabled> {product.quantity===0?"OUT OF STOCK":"ADD TO CART"}</button>:<button className="card__btn" onClick={handleAddToCart}>ADD TO CART</button>} */}
      </div>
    )
}

export default DisplayProducts