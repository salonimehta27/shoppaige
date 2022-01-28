import React,{useEffect} from 'react'

function ProductDetails(product) {

    // useEffect(()=>{
    //     fetch(`/products/${product.id}`)
    //     .then(res=>{
    //         if(res.ok){
    //             res.json().then(data=>console.log(data))
    //         }
    //     })
    // },[])
    console.log(product.product.name)
    return (
        <div>
            <p>name: {product.product.name}</p>
            <p>description: {product.product.description}</p>
        </div>
    )
}

export default ProductDetails
