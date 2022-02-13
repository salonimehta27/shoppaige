import { Form } from "react-bootstrap"
import { NavLink } from "react-router-dom"

function ShippingForm({
	name,
	email,
	setEmail,
	setName,
	handleAddressForm,
	address,
}) {
	return (
		<>
			<Form>
				<Form.Group className="form-group">
					<h1>Shipping Address</h1>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						required
						placeholder="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						name="email"
						required
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Label>Line1</Form.Label>
					<Form.Control
						type="text"
						name="line1"
						required
						placeholder="line1"
						value={address.line1}
						onChange={handleAddressForm}
					/>
					<Form.Label>Line2</Form.Label>
					<Form.Control
						type="text"
						name="line2"
						placeholder="line2"
						value={address.line2}
						onChange={handleAddressForm}
					/>
					<Form.Label>City</Form.Label>
					<Form.Control
						type="text"
						name="city"
						required
						placeholder="city name"
						value={address.city}
						onChange={handleAddressForm}
					/>
					<Form.Label>Postal Code</Form.Label>
					<Form.Control
						type="text"
						name="postal_code"
						required
						placeholder="postal code"
						value={address.postal_code}
						onChange={handleAddressForm}
					/>
					<Form.Label>State</Form.Label>
					<Form.Control
						type="text"
						name="state"
						required
						placeholder="state"
						value={address.state}
						onChange={handleAddressForm}
					/>
					<Form.Label>Country</Form.Label>
					<Form.Control
						type="text"
						name="country"
						placeholder="country"
						value={address.country}
						onChange={handleAddressForm}
					/>
					<div className="d-grid gap-2" style={{ marginTop: "5px" }}>
						<NavLink to="/cardPayment">
							<button>Proceed to payment</button>{" "}
						</NavLink>
					</div>
				</Form.Group>
			</Form>
		</>
	)
}

export default ShippingForm
