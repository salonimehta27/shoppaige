import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Listings from "./Listings"
import { Container, Stack } from "react-bootstrap"

function CurrentUserListings() {
	const { id } = useParams()
	const [search, setSearch] = useState("")
	const [userListings, setUserListings] = useState([])

	useEffect(() => {
		fetch(`/userProducts/${id}`)
			.then((res) => res.json())
			.then((data) => setUserListings(data))
	}, [id])

	const listings = userListings
		.filter((list) => list.name.toLowerCase().includes(search.toLowerCase()))
		.map((listing) => <Listings listing={listing} />)
	return (
		<Container style={{ marginTop: "75px" }}>
			<h1>My Listings</h1>
			<Stack gap={1}>
				<div>
					<input
						className="form-control"
						type="text"
						placeholder="Search listings..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						aria-label="Search"
					/>
				</div>
				<div>
					{listings.length !== 0 ? (
						listings
					) : (
						<h2>Please upload a product to become a seller</h2>
					)}
				</div>
			</Stack>
		</Container>
	)
}

export default CurrentUserListings
