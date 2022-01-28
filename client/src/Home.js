import React from 'react'
import Products from "./features/products/Products"

function Home({currentProduct,setCurrentProduct}) {
    return (
        <div>
            <Products currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>
        </div>
    )
}

export default Home
