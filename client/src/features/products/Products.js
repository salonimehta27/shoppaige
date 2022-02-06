import React from 'react'
import { Container } from 'react-bootstrap'
import DisplayProduct from "./DisplayProducts"
import { productAdded } from './productsSlice'
import {useSelector,useDispatch} from "react-redux"
import {useEffect,useState} from "react"
import { MDBRow } from 'mdb-react-ui-kit'
import Row from "react-bootstrap/Row"

function Products({currentProduct,setCurrentProduct}) {
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
        <div className="wrapper">
            {products.map(product=>{
             return   <>
            {product.map(p=><DisplayProduct product={p} setCurrentProduct={setCurrentProduct}/>)}
            </>
            })}      
        </div>
        
    )
}

export default Products
