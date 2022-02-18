import React from "react"
import {
	Nav,
	Stack,
	Col,
	Card,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap"

function OrderItems({ product }) {
	return (
		<Col>
			<Card className="text-center">
				<Card.Header>{product.product.name}</Card.Header>
				<Card.Body>
					<Card.Img
						variant="top"
						src={product.images[0].image_url}
						thumbnail
						style={{ height: "100px", width: "200px" }}
					/>
					<ListGroup className="list-group-flush">
						<ListGroupItem>Quantity: {product.item_quantity}</ListGroupItem>
						<ListGroupItem>Price: ${product.product.price}</ListGroupItem>
						<ListGroupItem>Color: {product.product.color}</ListGroupItem>
						<ListGroupItem>Size: {product.product.size}</ListGroupItem>
					</ListGroup>
				</Card.Body>
				<Card.Footer className="text-muted">2 days ago</Card.Footer>
			</Card>
		</Col>
	)
}

export default OrderItems
