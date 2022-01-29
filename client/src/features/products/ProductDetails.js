import React,{useEffect} from 'react'
import {useParams} from "react-router-dom"
import {useState} from "react"
import { contextSourcesMap } from 'tailwindcss/lib/jit/lib/sharedState'

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
    return (
        <div>
            {product!==null&&<>
                <p>name: {product.name}</p>
            <p>description: {product.description}</p>
            </>}
            
        </div>
    )
}

export default ProductDetails
