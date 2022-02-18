import React, { useState } from "react"
import { uploadFile } from "react-s3"
import {
	Form,
	FormControl,
	Button,
	Stack,
	Row,
	Col,
	Nav,
} from "react-bootstrap"
import { useDispatch } from "react-redux"
import { currentUserAdded } from "./signinSlice"

function Editprofile({ currentUser }) {
	const dispatch = useDispatch()
	const S3_BUCKET = "shoppaige"
	const REGION = "us-east-1"
	const [avatar, setAvatar] = useState({ avatar: currentUser.avatar })
	const [password, setPassword] = useState({
		password: "",
		password_confirmation: "",
	})
	const [username, setUsername] = useState({ username: currentUser.username })
	const config = {
		bucketName: S3_BUCKET,
		dirName: "images",
		region: REGION,
		accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
		secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
		s3Url: "http://shoppaige.s3-website-us-east-1.amazonaws.com",
	}

	function handleChange(e) {
		if (e.target.name === "avatar") {
			uploadFile(e.target.files[0], config)
				.then((data) => {
					setAvatar({ ...avatar, [e.target.name]: data.location })
				})
				.catch((err) => console.log(err))
		} else if (e.target.name === "username") {
			setUsername({ ...username, [e.target.name]: e.target.value })
		} else if (
			e.target.name === "password" ||
			e.target.name === "password_confirmation"
		) {
			setPassword({ ...password, [e.target.name]: e.target.value })
		}
	}
	function handleUpdate(obj) {
		fetch(`/users/${currentUser.id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(obj),
		})
			.then((res) => res.json())
			.then((data) => dispatch(currentUserAdded(data)))
	}

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
						<>
							<Form.Label>Username</Form.Label>
							<FormControl
								type="text"
								name="username"
								value={username.username}
								onChange={handleChange}
								aria-label="Amount (to the nearest dollar)"
							/>
						</>
						<Button variant="secondary" onClick={() => handleUpdate(username)}>
							Change Username
						</Button>
					</Form.Group>
					<>
						<Form.Group>
							<Form.Label>New Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								onChange={handleChange}
								value={password.password}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								name="password_confirmation"
								value={password.password_confirmation}
								onChange={handleChange}
							/>
						</Form.Group>
					</>
					<Button variant="secondary" onClick={() => handleUpdate(password)}>
						Change Password
					</Button>
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
						<Button variant="secondary" onClick={() => handleUpdate(avatar)}>
							change profile picture
						</Button>
						<Nav.Link href="/">
							<Button variant="outline-secondary">Cancel</Button>
						</Nav.Link>
					</Stack>
				</Form>
			</Col>
		</Row>
	)
}

export default Editprofile
