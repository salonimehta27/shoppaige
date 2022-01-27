import React,{useState} from 'react'
import {Card,Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
function DisplayProducts({product,setCurrentProduct}) {
    const[errors,setErrors]=useState([])
    const navigate=useNavigate()
    function handleProductPage(){
        navigate(`/products/${product.id}`)
        fetch(`/products/${product.id}`)
        .then(res=>{
            if(res.ok){
                res.json().then(data=>setCurrentProduct(data))
            }
            else{
                res.json().then(err=>setErrors(err))
            }
        })
        
    }
   
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
          <Button variant="primary" onClick={handleProductPage}>product details</Button>
        </Card.Body>
      </Card>
    )
}

export default DisplayProducts
