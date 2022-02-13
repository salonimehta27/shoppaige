import React from "react"
import { ListGroup, Container, Badge } from "react-bootstrap"
import { AiFillEdit } from "react-icons/ai"

function Listings({ listing }) {
	return (
		<Container>
			<ListGroup as="ol">
				<ListGroup.Item
					action
					href={`/products/${listing.id}`}
					className="d-flex justify-content-between align-items-start"
				>
					<div className="ms-2 me-auto">
						<div className="fw-bold">
							{listing.name} ${listing.price}
						</div>
						{listing.description.length > 50
							? `${listing.description.substring(0, 50)}...`
							: listing.description}
					</div>
					<Badge variant="primary" pill>
						{listing.quantity === 0 || listing.quantity === null
							? "Out of Stock"
							: `${listing.quantity}`}
					</Badge>
				</ListGroup.Item>
				{/* <AiFillEdit/> */}
			</ListGroup>
		</Container>
	)
}

export default Listings
