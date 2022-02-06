import React,{useEffect} from 'react'
import {useParams} from "react-router-dom"
import {useState} from "react"
import { contextSourcesMap } from 'tailwindcss/lib/jit/lib/sharedState'
import ImageSlider from '../images/ImageSlider'
import { Container } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap';

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
    // console.log(product.product.name)
    console.log(product)
// const arrOfImages= (product.images!==null)? 
//     product.images.map(x=>{
//    return {url:x.image_url}
// }):null
// console.log(arrOfImages)
// const images= product!==null&& product.images.map(x=><ImageSlider images={x.image_url}></ImageSlider>)
    // console.log(images)
    return (
        <Container>
            {product!==null&&<>
                <h1>{product.name}</h1>
           <ImageSlider images={product.images}></ImageSlider>
            <p>description: {product.description}</p>
            </>}
            
        </Container>
    )
}

export default ProductDetails
