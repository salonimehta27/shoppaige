import React, { useState } from "react"
import {
	Container,
	Form,
	InputGroup,
	FormControl,
	Row,
	Col,
} from "react-bootstrap"
import Images from "../images/Images"
import { useNavigate } from "react-router-dom"
import ImagesPreview from "../images/ImagesPreview"

function AddProduct({ currentUser }) {
	const navigate = useNavigate()
	const [product, setProduct] = useState({
		name: "",
		price: null,
		description: "",
		color: "",
		quantity: null,
		size: "",
		category_id: null,
		images: [],
		user_id: null,
	})

	function handleImages(url) {
		setProduct({
			...product,
			["images"]: [...product.images, { image_url: url }],
		})
	}

	function handleProductAdd(e) {
		e.preventDefault()
		fetch("/products", {
			method: "post",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				...product,
				user_id: currentUser.id,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setProduct(product)
				navigate("/")
			})
	}
	function handleChange(e) {
		if (e.target.name === "category_id") {
			setProduct({ ...product, [e.target.name]: parseInt(e.target.value) })
		} else {
			setProduct({ ...product, [e.target.name]: e.target.value })
		}
	}
	// console.log(product)
	return (
		<Container style={{ marginTop: "75px" }}>
			<Row className="justify-content-md-center">
				<Col xs sm={6}>
					<div className="m-3">
						<Form onSubmit={handleProductAdd} size="sm">
							<h1>Upload your product</h1>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlInput1"
							>
								<Form.Label>Name of the Product</Form.Label>
								<Form.Control
									type="text"
									name="name"
									value={product.name}
									onChange={handleChange}
									placeholder="Product name"
								/>
							</Form.Group>
							<Form.Label>Price</Form.Label>
							<InputGroup className="mb-3">
								<InputGroup.Text>$</InputGroup.Text>
								<FormControl
									name="price"
									value={product.price}
									onChange={handleChange}
									aria-label="Amount (to the nearest dollar)"
								/>
								<InputGroup.Text>.00</InputGroup.Text>
							</InputGroup>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Label>Product Description</Form.Label>
								<Form.Control
									as="textarea"
									name="description"
									onChange={handleChange}
									value={product.description}
									rows={3}
								/>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Label>Color</Form.Label>
								<Form.Control
									type="text"
									name="color"
									onChange={handleChange}
									value={product.color}
								/>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlInput1"
							>
								<Form.Label>Quantity</Form.Label>
								<Form.Control
									type="text"
									name="quantity"
									value={product.quantity}
									onChange={handleChange}
									placeholder="quantity"
								/>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlInput1"
							>
								<Form.Label>Size</Form.Label>
								<Form.Control
									type="text"
									name="size"
									onChange={handleChange}
									value={product.size}
									placeholder="Size"
								/>
							</Form.Group>
							<Form.Select
								aria-label="Default select example"
								name="category_id"
								onChange={handleChange}
							>
								<option>Select category</option>
								<option value="1">Clothing</option>
								<option value="2">Decor</option>
								<option value="3">Stationary</option>
								<option value="4">Technology</option>
							</Form.Select>

							<Images handleImages={handleImages} />
							<div className="d-grid gap-2">
								<button
									type="submit"
									size="lg"
									className="btn btn-dark btn-lg btn-block"
								>
									Submit
								</button>
							</div>
						</Form>
					</div>
				</Col>
				<Col
					style={{
						marginTop: "15px",
					}}
				>
					<div className="card">
						<div className="card__body">
							<h1>Product Preview</h1>
							<h5 className="card__title">{product.name}</h5>
							<p className="card__description">Price: ${product.price}</p>

							<p className="card__description">
								Description:{" "}
								{product.description.length > 50
									? `${product.description.substring(0, 50)}...`
									: product.description}
							</p>
							<p className="card__description">Color: {product.color}</p>

							<p className="card__description">Quantity: {product.quantity}</p>
							<p className="card__description">Size: {product.size}</p>
							<p className="card__description">
								Category: {product.category_id}
							</p>
							<p className="card__description">Images: </p>
							<ImagesPreview />
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default AddProduct
