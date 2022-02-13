import ShippingForm from "./ShippingForm"
import { Container, Row, Col } from "react-bootstrap"

function Checkout({
	totalPrice,
	name,
	email,
	setEmail,
	setName,
	handleAddressForm,
	address,
}) {
	return (
		<Container style={{ marginTop: "75px" }}>
			<Row className="justify-content-md-center">
				<Col xs lg="7">
					<ShippingForm
						name={name}
						setName={setName}
						email={email}
						setEmail={setEmail}
						totalPrice={totalPrice}
						address={address}
						handleAddressForm={handleAddressForm}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default Checkout
