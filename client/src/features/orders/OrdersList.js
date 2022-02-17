import React from "react"
import { Stack, Col, Row, Container, Accordion, Table } from "react-bootstrap"
import OrderItems from "./OrderItems"

function OrdersList({ order }) {
	// console.log(order)
	const orderItems = order.order_items.map((item) => (
		<OrderItems key={item.id} product={item} />
	))

	const timestamp = new Date(order.created_at).toLocaleDateString()
	// console.log(timestamp)
	return (
		<Container style={{ textAlign: "center" }}>
			<br></br>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Order number #{order.id}</th>
						<th>Total Paid ${order.total_amount}</th>
						<th>Order date: {timestamp}</th>
					</tr>
				</thead>
			</Table>
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
