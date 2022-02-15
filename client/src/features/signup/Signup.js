import React from "react"
import { Container, Form, Row, Col } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { currentUserAdded } from "./signinSlice"
import { uploadFile } from "react-s3"
import { avatarAdded } from "../images/imagesSlice"

function Signup() {
	const dispatch = useDispatch()
	const S3_BUCKET = "shoppaige"
	const REGION = "us-east-1"
	const config = {
		bucketName: S3_BUCKET,
		dirName: "images",
		region: REGION,
		accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
		secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
		s3Url: "http://shoppaige.s3-website-us-east-1.amazonaws.com",
	}

	const [signupForm, setSignupForm] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		username: "",
		avatar: "",
		password_confirmation: "",
	})
	const [errors, setErrors] = useState([])
	const navigate = useNavigate()

	function handleSubmit(e) {
		e.preventDefault()
		fetch("/signup", {
			method: "post",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				first_name: signupForm.first_name,
				last_name: signupForm.last_name,
				email: signupForm.email,
				username: signupForm.username,
				avatar: signupForm.avatar,
				password: signupForm.password,
				password_confirmation: signupForm.password_confirmation,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((user) => {
					dispatch(currentUserAdded(user))
					navigate("/")
					setSignupForm({
						first_name: "",
						last_name: "",
						username: "",
						avatar: "",
						email: "",
						password: "",
						password_confirmation: "",
					})
				})
			} else {
				r.json().then((err) => setErrors(err.errors))
			}
		})
	}
	function handleChange(e) {
		if (e.target.name === "avatar") {
			uploadFile(e.target.files[0], config)
				.then((data) => {
					dispatch(avatarAdded(data.location))
					setSignupForm({ ...signupForm, avatar: data.location })
				})
				.catch((err) => console.log(err))
		} else {
			setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
		}
	}
	console.log(signupForm)
	return (
		<Container style={{ marginTop: "75px" }}>
			<Row className="justify-content-md-center">
				<Col xs sm={7}>
					<Form
						onSubmit={handleSubmit}
						style={{ marginBottom: "0px!important" }}
					>
						<h3>Signup</h3>
						<Form.Group className="form-group">
							<Form.Label>First name</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								name="first_name"
								value={signupForm.first_name}
								placeholder="First name"
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group className="form-group">
							<Form.Label>Last name</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								name="last_name"
								value={signupForm.last_name}
								placeholder="Last name"
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group className="form-group">
							<Form.Label>Username</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								name="username"
								value={signupForm.username}
								placeholder="Last name"
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group className="form-group">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								className="form-control"
								value={signupForm.email}
								placeholder="Enter email"
								name="email"
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
						<Form.Group className="form-group">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								className="form-control"
								value={signupForm.password}
								placeholder="Enter password"
								name="password"
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group className="form-group">
							<Form.Label>Confirm password</Form.Label>
							<Form.Control
								type="password"
								className="form-control"
								value={signupForm.password_confirmation}
								placeholder="Confirm password"
								name="password_confirmation"
								onChange={handleChange}
							/>
						</Form.Group>
						<br />
						<div className="d-grid gap-2">
							<button
								type="submit"
								size="lg"
								className="btn btn-dark btn-lg btn-block"
							>
								Register
							</button>
						</div>
						<p className="forgot-password text-right">
							Already registered <a href="/signin">log in?</a>
						</p>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default Signup
