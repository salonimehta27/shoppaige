import React,{useState} from 'react'
// import {Card,Button,Col,Row} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import { currentUserAdded } from '../signup/signinSlice';
import { useSelector } from 'react-redux';
import ProductDetails from './ProductDetails'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBRow, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon,MDBCol} from "mdb-react-ui-kit";
import "./product.scss"
import { Container,Row,Col } from 'react-bootstrap';
function DisplayProducts({product,setCurrentProduct,currentUser}) {
    const[errors,setErrors]=useState([])
    // const currentUser=useSelector((state)=>state.currentUser.entitites)
    const navigate=useNavigate()
    function handleProductPage(){
        navigate(`/products/${product.id}`)
        setCurrentProduct(product)
    }
  //   console.log(currentUser)
  // //  console.log(product.images[0].image_url)
  // console.log(product)
  
    return (
    
      <div className="card">
        <div className="card__body" onClick={handleProductPage}>
          <img className="card__image"src={product.images[0].image_url}/>
          <h5 className="card__title">{product.name}</h5>
          <p className="card__description">${product.price}</p>
          
          <p className="card__description">{product.description.length>50?`${product.description.substring(0,50)}...`:product.description}</p>
        </div>
        {product!==null&&currentUser!==null&&product.user_id===currentUser.id?<button disabled>ADD TO CART</button>:<button className="card__btn">ADD TO CART</button>}
      </div>
    )
}

export default DisplayProducts
  {/* //     <Col>
      //   <Card style={{ width: '18rem'}}>
      //   <Card.Img variant="top" src={product.images[0].image_url} />
      //   <Card.Body>
      //     <Card.Title>{product.name}</Card.Title>
      //     <Card.Text>
      //       {product.description}
      //     </Card.Text>
      //     <Button variant="primary">Add to cart</Button>
      //     <Button variant="primary" onClick={handleProductPage}>product details</Button>
      //   </Card.Body>
      // </Card>
      // </Col> */}