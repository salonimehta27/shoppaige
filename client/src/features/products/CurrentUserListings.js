import React,{useEffect,useState} from 'react'
import { contextSourcesMap } from 'tailwindcss/lib/jit/lib/sharedState'
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import Listings from './Listings'
function CurrentUserListings() {

const {id}= useParams()
const[userListings,setUserListings]=useState([])
// console.log(currentUser)

    useEffect(()=>{
        fetch(`/userProducts/${id}`)
        .then(res=>res.json())
        .then(data=>setUserListings(data))
    },[])

    // if(listings.length===0){

    // }
    console.log(userListings)
    const listings=userListings.map((listing=><Listings listing={listing}/>))
    return (
        <div>
            {listings.length!==0?listings:<h2>Please upload a product to become a seller</h2>}
        </div>
    )
}

export default CurrentUserListings
