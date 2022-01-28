import React,{useEffect,useState} from 'react'
import { contextSourcesMap } from 'tailwindcss/lib/jit/lib/sharedState'

function CurrentUserListings({currentUser}) {
const[userListings,setUserListings]=useState([])

console.log(currentUser)

    useEffect(()=>{
        fetch(`/userProducts/${currentUser.id}`)
        .then(res=>res.json())
        .then(data=>setUserListings(data))
    },[])
    console.log(userListings)
    return (
        <div>
            
        </div>
    )
}

export default CurrentUserListings
