import React from "react"
import { Container } from "react-bootstrap"
import Editprofile from "./Editprofile"

function Profile({ currentUser }) {
	return (
		<Container style={{ marginTop: "75px" }}>
			{currentUser && <Editprofile currentUser={currentUser} />}
		</Container>
	)
}

export default Profile
