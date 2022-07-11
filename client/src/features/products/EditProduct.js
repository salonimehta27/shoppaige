import React, { useState } from "react"
import { Stack, Button, Form, InputGroup, FormControl } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { productUpdated } from "./productsSlice"

function EditProduct({ editProduct, setEdit, setProduct }) {
	const [product, setNewProduct] = useState({
		name: editProduct.name,
		price: editProduct.price,
		description: editProduct.description,
		color: editProduct.color,
		quantity: editProduct.quantity,
		size: editProduct.size,
	})
	const dispatch = useDispatch()
	function handleChange(e) {
		setNewProduct({ ...product, [e.target.name]: e.target.value })
	}

	function handleUpdate() {
		fetch(`/products/${editProduct.id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch(productUpdated(data))
				setProduct(data)
				setEdit(false)
			})
	}
	return (
		<Form>
			<Form.Group className="form-group">
				<Form.Label>
					Name:
					<Form.Control
						type="text"
						className="form-control"
						name="name"
						value={product.name}
						onChange={handleChange}
					/>
				</Form.Label>
			</Form.Group>
			<Form.Group>
				<Form.Label>
					Size
					<Form.Control
						type="text"
						className="form-control"
						name="size"
						value={product.size}
						onChange={handleChange}
					/>
				</Form.Label>
			</Form.Group>
			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				<Form.Label>Product Description</Form.Label>
				<Form.Control
					as="textarea"
					name="description"
					onChange={handleChange}
					value={product.description}
					rows={3}
				/>
			</Form.Group>
			<Form.Group>
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
			</Form.Group>
			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				<Form.Label>Color</Form.Label>
				<Form.Control
					type="text"
					name="color"
					onChange={handleChange}
					value={product.color}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Quantity</Form.Label>
				<Form.Control
					type="text"
					name="quantity"
					value={product.quantity}
					onChange={handleChange}
				/>
			</Form.Group>
			<Stack gap={1}>
				<Button variant="secondary" onClick={handleUpdate}>
					Save changes
				</Button>
				<Button variant="outline-secondary" onClick={() => setEdit(false)}>
					Cancel
				</Button>
			</Stack>
		</Form>
	)
}

export default EditProduct
