import React from 'react'
import { Container } from 'react-bootstrap'
import DisplayProduct from "./DisplayProducts"
import { productAdded } from './productsSlice'
import {useSelector,useDispatch} from "react-redux"
import {useEffect,useState} from "react"
import { MDBRow } from 'mdb-react-ui-kit'
import Row from "react-bootstrap/Row"

function Products({currentProduct,setCurrentProduct,currentUser,search}) {
    const dispatch=useDispatch()
    const[errors,setErrors]=useState([])
    const products=useSelector(state=>state.products.entities)
    console.log(products)
    // debugger
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
// console.log(products)
    return (
        <div className="wrapper">
            {products!==null&& products.map(product=>{
             return   <>
            {product.filter(prod=> prod.name.toLowerCase().includes(search.toLowerCase())).map(p=><DisplayProduct product={p} currentUser={currentUser} setCurrentProduct={setCurrentProduct}/>)}
            </>
            })}      
        </div>
        
    )
}

export default Products
