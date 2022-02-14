import React, { useState } from "react"
import { useNavigate } from "react"
import { Form, FormControl, Button, Stack, Row, Col } from "react-bootstrap"

function Editprofile({ currentUser }) {
	const [user, setUser] = useState({
		password: "",
		username: currentUser.username,
		avatar: currentUser.avatar,
		password_confirmation: "",
	})

	function handleChange(e) {
		setUser({ ...user, [e.target.name]: e.target.value })
	}
	function handleUpdate() {}
	return (
		<Row className="justify-content-md-center">
			<Col xs sm="7">
				<Form>
					<Form.Group>
						<Form.Label>
							FirstName:
							<Form.Control
								type="text"
								className="form-control"
								name="first_name"
								rows={3}
								placeholder={currentUser.first_name}
								disabled
							/>
						</Form.Label>
					</Form.Group>
					<Form.Group>
						<Form.Label>
							LastName
							<Form.Control
								type="text"
								className="form-control"
								name="last_name"
								rows={3}
								placeholder={currentUser.last_name}
								disabled
							/>
						</Form.Label>
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="text"
							name="description"
							placeholder={currentUser.email}
							rows={3}
							disabled
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Username</Form.Label>
						<FormControl
							type="text"
							name="username"
							value={user.username}
							onChange={handleChange}
							aria-label="Amount (to the nearest dollar)"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>New Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							onChange={handleChange}
							value={user.password}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type="password"
							name="password_confirmation"
							value={user.password_confirmation}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="formFileMultiple" className="mb-3">
						<Form.Label>Profile Picture</Form.Label>
						<Form.Control
							type="file"
							name="avatar"
							multiple
							onChange={handleChange}
						/>
					</Form.Group>
					<Stack gap={1}>
						<Button variant="secondary" onClick={handleUpdate}>
							Save changes
						</Button>
						<Button variant="outline-secondary">Cancel</Button>
					</Stack>
				</Form>
			</Col>
		</Row>
	)
}

export default Editprofile
