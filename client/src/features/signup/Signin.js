import {Button,Form,Container,Row,Col} from "react-bootstrap"
import {useState} from "react"
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import {currentUserAdded} from "./signinSlice"

function Signin({onSignin}) {
    const dispatch=useDispatch()
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[errors,setErrors]=useState([])
const navigate=useNavigate();
    function handleSignin(e){
        e.preventDefault()
        fetch("/signin",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        }).then(r=>{
            if(r.ok){
                r.json().then((user=>{
                    dispatch(currentUserAdded(user))
                    setEmail("")
                    setPassword("")
                    navigate("/")
                }))
            }
            else{
                r.json().then((err)=>setErrors(err.errors))
              }
        })
    }
    console.log(errors)
    return (
        <Container style={{marginTop:"75px"}}>
        <Row className="justify-content-md-center">
        <Col xs sm={7}>
        <Form onSubmit={handleSignin}>
        <h3>Signin</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
         
        <div className="d-grid gap-2">
        <button type="submit"  size="lg" className="btn btn-dark btn-lg btn-block">Signin</button>
        {/* <Button variant="primary" SIZE="lg" type="submit">
          Signin
        </Button> */}
        </div>
        <p className="forgot-password text-right">
            Don't have an account?  <a href="/signup">create an account</a>
        </p>
      </Form> 
      </Col>
  
      </Row>
      </Container>
    )
}

export default Signin
