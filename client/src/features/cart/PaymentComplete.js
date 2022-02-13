import React from "react"
import { Container, Nav } from "react-bootstrap"

function PaymentComplete() {
	return (
		<Container style={{ marginTop: "75px" }}>
			<h1>Thank you. Your order has been processed</h1>
			<Nav.Link href="/">Continue Shopping</Nav.Link>
		</Container>
	)
}

export default PaymentComplete
