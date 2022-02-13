import React from "react"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import Badge from "@material-ui/core/Badge"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { currentUserAdded } from "./features/signup/signinSlice"

function NavbarDisplay({ itemCount }) {
	const currentUser = useSelector((state) => state.currentUser.entities)
	const cartData = useSelector((state) => state.carts.entities)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	function handleSignout() {
		fetch("/signout", {
			method: "delete",
		})
		dispatch(currentUserAdded(null))
		navigate("/signin")
	}
	//console.log(cartData)
	return (
		<Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
			<Container>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">
					<Navbar.Brand href="/">Shoppaige</Navbar.Brand>
					<Nav className="me-auto" collapseOnSelect fixed="top" expand="sm">
						{currentUser !== null || currentUser === {} ? (
							<Nav.Link onClick={handleSignout}>Signout</Nav.Link>
						) : (
							<Nav.Link href="/signin">Signin</Nav.Link>
						)}
						{currentUser !== null && <Nav.Link>Sellers</Nav.Link>}
						{currentUser !== null && (
							<>
								<NavDropdown
									id="nav-dropdown-dark-example"
									title="Profile"
									menuVariant="dark"
								>
									<NavDropdown.Item href="/addProduct">
										Become a seller
									</NavDropdown.Item>
									<NavDropdown.Item href={`/yourListings/${currentUser.id}`}>
										Listings
									</NavDropdown.Item>
								</NavDropdown>
							</>
						)}
					</Nav>
					<Nav>
						<Navbar.Collapse className="justify-content-end">
							{currentUser !== null && (
								<Navbar.Text>
									Hello, <a href="/profile">{currentUser.first_name}</a>
								</Navbar.Text>
							)}
						</Navbar.Collapse>

						<Nav.Link
							href="/carts"
							eventKey={2}
							className="justify-content-end"
						>
							<Badge
								color="secondary"
								badgeContent={cartData ? cartData.cart_products.length : null}
							>
								<ShoppingCartIcon style={{ color: "white" }} />{" "}
							</Badge>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarDisplay
