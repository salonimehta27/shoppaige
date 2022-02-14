import React from "react"
import { Stack, Col, Row, Container, Accordion } from "react-bootstrap"
import OrderItems from "./OrderItems"

function OrdersList({ order }) {
	console.log(order)
	const orderItems = order.order_items.map((item) => (
		<OrderItems key={item.id} product={item} />
	))
	const timestamp = new Date(order.created_at).toLocaleTimeString()
	return (
		<Container style={{ textAlign: "center" }}>
			<br></br>
			<h4>Order number #{order.id}</h4>
			<p>Total Paid ${order.total_amount}</p>
			<p>Order date: {timestamp} </p>
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>see items</Accordion.Header>
					<Accordion.Body>
						<h4>Items: </h4>
						<Row>{orderItems}</Row>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Container>
	)
}

export default OrdersList
