import React,{useEffect} from 'react'
import {useParams} from "react-router-dom"
import {useState} from "react"
import ImageSlider from '../images/ImageSlider'
import { Button, Container } from 'react-bootstrap'

function ProductDetails() {
const {id}=useParams()
const[product,setProduct]=useState(null)
console.log(id)
    useEffect(()=>{
        fetch(`/products/${id}`)
        .then(res=>{
            if(res.ok){
                res.json().then(data=>setProduct(data))
            }
        })
    },[])
    console.log(product)

    return (
        <Container>
            {product!==null&&<>
                <h1>{product.name}</h1>
           <ImageSlider images={product.images}></ImageSlider>
            <p>Size: {product.size}</p>
            <p>description: {product.description}</p>
            <p>Price: ${product.price}</p>
            {product.quantity<3?<div style={{color:"red"}}role="alert">
          only {product.quantity} left
           </div>:null}
           <Button>ADD TO CART</Button>
            </>}
            
        </Container>
    )
}

export default ProductDetails
