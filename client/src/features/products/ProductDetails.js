import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import ImageSlider from "../images/ImageSlider"
import { Container, Row, Col } from "react-bootstrap"
import { AiFillEdit } from "react-icons/ai"
import EditProduct from "./EditProduct"

function ProductDetails({ currentUser }) {
	const { id } = useParams()
	const [product, setProduct] = useState(null)
	const [edit, setEdit] = useState(false)
	useEffect(() => {
		fetch(`/products/${id}`).then((res) => {
			if (res.ok) {
				res.json().then((data) => setProduct(data))
			}
		})
	}, [id])
	// console.log(currentUser)
	// debugger
	const seller =
		currentUser !== null
			? currentUser.roles.map((role) => role.name).includes("seller")
			: null

	function handleEdit() {
		setEdit(!edit)
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
			.then((data) => console.log(data))
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
								<EditProduct
									editProduct={product}
									setEdit={setEdit}
									setProduct={setProduct}
								/>
							)}
						</Col>
					</Row>
				</>
			)}
		</Container>
	)
}

export default ProductDetails
