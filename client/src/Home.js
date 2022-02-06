import React from 'react'
import Products from "./features/products/Products"
import Filter from './Filter'
import Searchbar from './Searchbar'

function Home({currentProduct,setCurrentProduct,currentUser}) {
    return (
        <div>
            <Searchbar/>
            <Products currentProduct={currentProduct} currentUser={currentUser} setCurrentProduct={setCurrentProduct}/>
        </div>
    )
}

export default Home
