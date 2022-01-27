import React from 'react'
import { Container } from 'react-bootstrap'
import DisplayProduct from "./DisplayProducts"
import { productAdded } from './productsSlice'
import {useSelector,useDispatch} from "react-redux"
import {useEffect,useState} from "react"

function Products() {
    const dispatch=useDispatch()
    const[errors,setErrors]=useState([])
    const products=useSelector(state=>state.products.entities)
    console.log(products)
    useEffect(()=>{
        fetch("/products")
        .then(r=>{
            if(r.ok){
                r.json().then(data=>dispatch(productAdded(data)))
            }
            else{
                r.json().then(err=>setErrors(err))
            }
        })
    },[])
    return (
        <Container style={{marginTop:"25px"}}>
            <DisplayProduct products={products}/>
        </Container>
        
    )
}

export default Products
