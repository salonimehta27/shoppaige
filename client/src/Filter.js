import React from 'react';
import { useEffect,useState } from 'react';
import {DropdownButton,Dropdown,Form} from "react-bootstrap"
import { productAdded } from './features/products/productsSlice';
import {useDispatch} from "react-redux"

function Filter() {
 const dispatch=useDispatch()
//  const[categoryId,setCategoryId]=useState(null)
    function handleChange(e){
        fetch(`/productsCategory/${parseInt(e.target.value)}`)
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
            dispatch(productAdded(data))
        })
    }
  return <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
}

export default Filter;
