import React from 'react'
import { navigate } from 'react-big-calendar/lib/utils/constants'
import {Navbar,Container,Nav} from "react-bootstrap"
import {useNavigate} from 'react-router-dom'


function NavbarDisplay({currentUser,setUser}) {
  function handleSignout(){
    fetch("/signout",{
      method:"delete",
    })

    setUser(null)
  }
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Shoppaige</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {currentUser!==null?<Nav.Link onClick={handleSignout}>Signout</Nav.Link>:<Nav.Link href="/signin">Signin</Nav.Link>}
          {/* <Nav.Link href="/signin">Signin</Nav.Link> */}
          <Nav.Link href="/signup">Signup</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarDisplay
