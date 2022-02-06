import React,{useEffect,useState} from 'react'
import { contextSourcesMap } from 'tailwindcss/lib/jit/lib/sharedState'
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import Listings from './Listings'
import { Container } from 'react-bootstrap'
function CurrentUserListings() {

const {id}= useParams()
const[userListings,setUserListings]=useState([])
// console.log(currentUser)

    useEffect(()=>{
        fetch(`/userProducts/${id}`)
        .then(res=>res.json())
        .then(data=>setUserListings(data))
    },[])

    // console.log(userListings)
    const listings=userListings.map((listing=><Listings listing={listing}/>))
    return (
        <Container style={{marginTop:"75px"}}>
            <h1>My Listings</h1>
            {listings.length!==0?listings:<h2>Please upload a product to become a seller</h2>}
        </Container>
    )
}

export default CurrentUserListings
