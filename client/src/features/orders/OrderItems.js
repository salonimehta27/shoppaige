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
			{/* <div className="bg-light border">
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
			</div> */}

			{/* <Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={product.images[0].image_url} />
				<Card.Body>
					<Card.Title>{product.product.name}</Card.Title>
					<Card.Text>${product.product.price}</Card.Text>
					<Card.Text>{product.product.color}</Card.Text>
					<Card.Text>{product.product.size}</Card.Text>
					<Card.Text>{product.product.quantity}</Card.Text>
				</Card.Body>
			</Card> */}
			{/* 
			<Card style={{ width: "18rem" }} className="text-center">
				<Card.Img variant="top" src={product.images[0].image_url} />
				<Card.Body>
					<Card.Title>{product.product.name}</Card.Title>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>Quantity: {product.product.quantity}</ListGroupItem>
					<ListGroupItem>Price: ${product.product.price}</ListGroupItem>
					<ListGroupItem>Color: {product.product.color}</ListGroupItem>
					<ListGroupItem>Size: {product.product.size}</ListGroupItem>
				</ListGroup>
			</Card> */}

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
						<ListGroupItem>Quantity: {product.product.quantity}</ListGroupItem>
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
