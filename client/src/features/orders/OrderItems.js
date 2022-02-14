import React from "react"
import { Nav, Stack, Col } from "react-bootstrap"

function OrderItems({ product }) {
	return (
		<Col>
			<div className="bg-light border">
				<Nav.Link href={`/products/${product.product.id}`}>
					{" "}
					<p>{product.product.name}</p>
				</Nav.Link>
				<p>Price: ${product.product.price}</p>
				<p>Color: {product.product.color}</p>
				<p>Size: {product.product.size}</p>
				<img
					src={product.images[0].image_url}
					alt="product image"
					style={{ width: "100px", height: "100px" }}
				></img>
				<p>Quantity: {product.item_quantity}</p>
			</div>
		</Col>
	)
}

export default OrderItems
