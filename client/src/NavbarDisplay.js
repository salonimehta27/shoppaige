import React from 'react'
import { navigate } from 'react-big-calendar/lib/utils/constants'
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import {useDispatch,useSelector} from "react-redux"
import {currentUserAdded} from "./features/signup/signinSlice"

function NavbarDisplay({itemCount}) {
  const currentUser=useSelector((state=>state.currentUser.entities))
  const dispatch=useDispatch()
  function handleSignout(){
    fetch("/signout",{
      method:"delete",
    })

    dispatch(currentUserAdded(null))
    
  }
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Shoppaige</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {currentUser!==null || currentUser==={}?<Nav.Link onClick={handleSignout}>Signout</Nav.Link>:<Nav.Link href="/signin">Signin</Nav.Link>}
          {/* <Nav.Link href="/signin">Signin</Nav.Link> */}
          {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
          <NavDropdown
          id="nav-dropdown-dark-example"
          title="Profile"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/addProduct">Become a seller</NavDropdown.Item>
          <NavDropdown.Item href={currentUser!==null&&`/yourListings/${currentUser.id}`}>Listings</NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
          {/* <Nav.Link href="/addProduct">Become a seller</Nav.Link>
          <Nav.Link href={currentUser!==null&&`/yourListings/${currentUser.id}`}>Listings</Nav.Link> */}
          {/* when the user becomes a seller then they can see the list of just their products in a tab */}
        </Nav>
        <Badge color="secondary" badgeContent={1}>
          <ShoppingCartIcon style={{color:"white"}} />{" "}
        </Badge>
        </Container>
      </Navbar>
    )
}

export default NavbarDisplay
