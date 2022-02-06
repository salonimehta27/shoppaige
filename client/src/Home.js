import React from 'react'
import Products from "./features/products/Products"

function Home({currentProduct,setCurrentProduct,currentUser}) {
    return (
        <div>
            <Products currentProduct={currentProduct} currentUser={currentUser} setCurrentProduct={setCurrentProduct}/>
        </div>
    )
}

export default Home
