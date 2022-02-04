import React,{useState} from 'react'
import {Container, Form,InputGroup,FormControl} from "react-bootstrap"
import Images from '../images/Images'
import{useSelector,useDispatch} from "react-redux"


function AddProduct({currentUser}) {
// const images=useSelector((state)=>state.images.entities)
// console.log(images)
console.log(currentUser)
const[imagesUrl,setImages]=useState([])
const[product,setProduct]=useState({
    name:"",
    price:null,
    description:"",
    color:"",
    quantity:null,
    size:"",
    category_id:null,
    images:[],
    user_id:null
})

function handleImages(url){
    // debugger
    setProduct({...product,["images"]:[...product.images,{"image_url":url}]})
    // setProduct({...product,[images]:images.push({image_url:url})})
}
console.log(imagesUrl)
function handleProductAdd(e){
    e.preventDefault()
    fetch('/products',{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            ...product,user_id:currentUser.id
        })
    }).then(res=>res.json())
    .then(data=>console.log(data))
}
function handleChange(e){
    if(e.target.name==="category_id"){
        setProduct({...product,[e.target.name]:parseInt(e.target.value)})
    }
    else{
        setProduct({...product,[e.target.name]:e.target.value})
    }
}
console.log(product)
    return (
        <Container>
        <div className="m-3">
            <h1>Upload your product</h1>
            <Form onSubmit={handleProductAdd} size="sm">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name of the Product</Form.Label>
        <Form.Control type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product name" />
        </Form.Group>
        <Form.Label>Price</Form.Label>
      <InputGroup className="mb-3">
      <InputGroup.Text>$</InputGroup.Text>
       <FormControl name="price" value={product.price} onChange={handleChange}  aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
  </InputGroup>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Product Description</Form.Label>
        <Form.Control as="textarea" name="description" onChange={handleChange}  value={product.description} rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Color</Form.Label>
        <Form.Control type="text" name="color" onChange={handleChange}  value={product.color}/>
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text" name="quantity" value={product.quantity}  onChange={handleChange} placeholder="quantity" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Size</Form.Label>
        <Form.Control type="text" name="size" onChange={handleChange} value={product.size} placeholder="Size" />
        </Form.Group>
        <Form.Select aria-label="Default select example" name="category_id" onChange={handleChange}>
         <option>Select category</option>
         <option value="1">Clothing</option>
         <option value="2">Decor</option>
         <option value="3">Stationary</option>
         <option value="4">Technology</option>
           </Form.Select>


        {/* <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple />
        </Form.Group> */}
        <Images handleImages={handleImages}/>
        <div className="d-grid gap-2">
        <button type="submit"  size="lg" className="btn btn-dark btn-lg btn-block">Submit</button>
        </div>
        </Form>
        
        {/* <button className="btn btn-outline-primary">Upload</button> */}
      </div>
      </Container>
    )
}

export default AddProduct
