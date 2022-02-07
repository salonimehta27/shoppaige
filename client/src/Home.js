import React,{useState} from 'react'
import Products from "./features/products/Products"
import Filter from './Filter'
import Searchbar from './Searchbar'

function Home({currentProduct,setCurrentProduct,currentUser}) {
    const[search,setSearch]=useState("")
    return (
        <div>
            <Searchbar search={search} setSearch={setSearch}/>
            <Products currentProduct={currentProduct} search={search} currentUser={currentUser} setCurrentProduct={setCurrentProduct}/>
        </div>
    )
}

export default Home
