import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./Home"
import { useSelector, useDispatch } from "react-redux"
import { currentUserAdded } from "./features/signup/signinSlice"
import { cartProductsAdded } from "./features/cart/cartsSlice"
import Signin from "./features/signup/Signin"
import NavbarDisplay from "./NavbarDisplay"
import Sold from "./features/orders/Sold"
import Signup from "./features/signup/Signup"
import ProductDetails from "./features/products/ProductDetails"
import AddProduct from "./features/products/AddProduct"
import CurrentUserListings from "./features/products/CurrentUserListings"
import Cart from "./features/cart/Cart"
import PaymentComplete from "./features/cart/PaymentComplete"
import Profile from "./features/signup/Profile"
import Checkout from "./features/cart/Checkout"
import Footer from "./Footer"
import StripeContainer from "./features/cart/StripeContainer"
import Order from "./features/orders/Order"

function App() {
	const currentUser = useSelector((state) => state.currentUser.entities)
	const cartData = useSelector((state) => state.carts.entities)
	const dispatch = useDispatch()
	const [errors, setErrors] = useState([])
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [address, setAddress] = useState({
		line1: "",
		line2: "",
		city: "",
		postal_code: null,
		state: "",
		country: "",
	})
	function handleAddressForm(e) {
		setAddress({ ...address, [e.target.name]: e.target.value })
	}
	const [currentProduct, setCurrentProduct] = useState(null)
	useEffect(() => {
		fetch("/me").then((r) => {
			if (r.ok) {
				r.json().then((user) => dispatch(currentUserAdded(user)))
			}
		})
		fetch(`/myCart`).then((res) => {
			if (res.ok) {
				res.json().then((data) => dispatch(cartProductsAdded(data)))
			} else {
				res.json().then((err) => setErrors(err))
			}
		})
	}, [])

	return (
		<div style={{ position: "relative", minHeight: "100vh" }}>
			<div style={{ paddingBottom: "2.5rem" }}>
				<Router>
					<NavbarDisplay currentUser={currentUser} />
					<Routes>
						<Route
							exact
							path="/"
							element={
								<Home
									currentProduct={currentProduct}
									setCurrentProduct={setCurrentProduct}
									currentUser={currentUser}
								/>
							}
						/>
						<Route exact path="/signin" element={<Signin />} />
						<Route exact path="/signup" element={<Signup />} />
						<Route
							exact
							path="/products/:id"
							element={
								<ProductDetails
									product={currentProduct}
									currentUser={currentUser}
								/>
							}
						/>
						<Route
							exact
							path="/addProduct"
							element={<AddProduct currentUser={currentUser} />}
						/>
						<Route
							exact
							path="/yourListings/:id"
							element={<CurrentUserListings currentUser={currentUser} />}
						/>
						<Route
							exact
							path="/carts"
							element={<Cart cartData={cartData} currentUser={currentUser} />}
						/>
						<Route
							exact
							path="/paymentComplete"
							element={<PaymentComplete />}
						/>
						{cartData && (
							<Route
								exact
								path="/checkout"
								element={
									<Checkout
										totalPrice={cartData.total_amount}
										name={name}
										email={email}
										setEmail={setEmail}
										setName={setName}
										address={address}
										handleAddressForm={handleAddressForm}
									/>
								}
							/>
						)}
						{cartData && (
							<Route
								exact
								path="/cardPayment"
								element={
									<StripeContainer
										name={name}
										email={email}
										totalPrice={cartData.total_amount}
										address={address}
									/>
								}
							/>
						)}
						<Route
							exact
							path="/profile"
							element={<Profile currentUser={currentUser} />}
						/>
						<Route exact path="/orders" element={<Order />} />
						<Route exact path="/sold" element={<Sold />} />
					</Routes>
				</Router>
			</div>
			{/* <Footer/> */}
		</div>
	)
}

export default App
