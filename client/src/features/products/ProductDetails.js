import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import Reviews from "./Reviews"
import ImageSlider from "../images/ImageSlider"
import {
	Container,
	Row,
	Col,
	FloatingLabel,
	Form,
	Button,
} from "react-bootstrap"
import { AiFillEdit } from "react-icons/ai"
import EditProduct from "./EditProduct"
import { useDispatch } from "react-redux"
import { cartProductsAdded } from "../cart/cartsSlice"
import { productAdded, productRemoved, reviewsAdded } from "./productsSlice"

function ProductDetails({ currentUser }) {
	const { id } = useParams()
	const [product, setProduct] = useState(null)
	const [edit, setEdit] = useState(false)
	const dispatch = useDispatch()
	const [active, setActive] = useState(true)
	const [review, setReview] = useState("")
	const [reviews, setReviews] = useState([])
	useEffect(() => {
		fetch(`/products/${id}`).then((res) => {
			if (res.ok) {
				res.json().then((data) => setProduct(data))
			}
		})
	}, [id])

	const seller =
		currentUser !== null
			? currentUser.roles.map((role) => role.name).includes("seller")
			: null

	function handleEdit() {
		setEdit(!edit)
	}

	// function handleDelete(id) {
	// 	fetch(`/products/${id}`, {
	// 		method: "delete",
	// 	})
	// 	dispatch(productRemoved(id))
	// 	navigate("/")
	// }

	function handleReviewSubmit() {
		fetch("/reviews", {
			method: "post",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				user_id: currentUser.id,
				product_id: product.id,
				review_body: review,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setReview("")
				setReviews(reviews.map((x) => [...x, data]))
			})
	}
	function handleDeactivateListing() {
		setActive(!active)
		fetch(`/products/${product.id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ active_listing: active }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				dispatch(productRemoved(data.id))
			})
		//setActive(false)
	}

	function handleAddToCart() {
		fetch("/addtocart", {
			method: "post",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				product_id: product.id,
				item_quantity: 1,
			}),
		})
			.then((res) => res.json())
			.then((data) => dispatch(cartProductsAdded(data)))
	}
	return (
		<Container style={{ marginTop: "58px" }}>
			{product !== null && (
				<>
					<Row className="justify-content-md-left">
						<Col sm={7} style={{ marginTop: "50px" }}>
							<ImageSlider images={product.images}></ImageSlider>
						</Col>

						<Col sm={4} style={{ marginTop: "50px" }}>
							{seller !== null && product.user_id === currentUser.id ? (
								<i style={{ color: "black" }}>
									Edit Listing{" "}
									<AiFillEdit
										onClick={handleEdit}
										style={{ cursor: "pointer" }}
									/>
									or
									<p
										style={{ color: "blue", cursor: "pointer" }}
										onClick={handleDeactivateListing}
									>
										{active && product.active_listing
											? "Deactivate Listing"
											: "Activate Listing"}
									</p>
									{/* <AiFillDelete
										style={{ cursor: "pointer" }}
										onClick={() => handleDelete(product.id)}
									/> */}
								</i>
							) : null}
							{edit === false ? (
								<>
									<h1>{product.name}</h1>
									<p>Size: {product.size}</p>
									<p>Description: {product.description}</p>
									<p>Price: ${product.price}</p>
									<p>Color: {product.color}</p>

									{product.quantity < 5 ? (
										<div style={{ color: "red" }} role="alert">
											only {product.quantity} left
										</div>
									) : null}
									<b style={{ color: "purple" }}>
										Sold by: {product.owner.username}
									</b>
									{(product !== null && product.quantity === 0) ||
									(currentUser !== null &&
										product.user_id === currentUser.id) ? (
										<button disabled>
											{product.quantity === 0 ? "OUT OF STOCK" : "ADD TO CART"}
										</button>
									) : (
										<button className="card__btn" onClick={handleAddToCart}>
											ADD TO CART
										</button>
									)}
								</>
							) : (
								<>
									<EditProduct
										editProduct={product}
										setEdit={setEdit}
										setProduct={setProduct}
									/>
								</>
							)}
						</Col>
					</Row>

					<Row style={{ marginTop: "25px" }}>
						<Col>
							{currentUser !== null && (
								<FloatingLabel
									controlId="floatingTextarea"
									label="Comments"
									className="mb-3"
								>
									<Form.Control
										as="textarea"
										placeholder="Leave a comment here"
										value={review}
										onChange={(e) => setReview(e.target.value)}
									/>
									<Button variant="secondary" onClick={handleReviewSubmit}>
										Submit
									</Button>
								</FloatingLabel>
							)}
						</Col>
					</Row>
					<Row>
						{currentUser !== null && (
							<Reviews
								productId={product.id}
								reviews={reviews}
								setReviews={setReviews}
							></Reviews>
						)}
					</Row>
				</>
			)}
		</Container>
	)
}

export default ProductDetails
