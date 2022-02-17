import React from "react"
import { Container, Nav, Alert } from "react-bootstrap"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

function PaymentComplete() {
	return (
		<Container style={{ marginTop: "75px" }}>
			<Alert variant="primary">Thank you. Your order has been processed</Alert>
			<Nav.Link href="/">
				<BsFillArrowRightCircleFill />
				Continue Shopping
			</Nav.Link>
		</Container>
	)
}

export default PaymentComplete
