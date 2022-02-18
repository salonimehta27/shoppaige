import React from "react"

function ReviewsDisplay({ review }) {
	// console.log(review)
	const timestamp = new Date(review.created_at).toLocaleDateString()
	return (
		<>
			{" "}
			{review !== [] && (
				<>
					<div>
						{" "}
						<img
							src={
								review.user.avatar === null
									? "http://www.mountainheavensella.com/wp-content/uploads/2018/12/default-user.png"
									: review.user.avatar
							}
							alt=""
							className="rounded-circle"
							width="40"
							height="40"
						/>
						<h4 style={{ color: "#797EF6" }}>{review.user.username}</h4>{" "}
						<span>- {timestamp}</span> <br></br>
						<p>{review.review_body}</p>
					</div>
				</>
			)}{" "}
			<br></br>
		</>
	)
}

export default ReviewsDisplay
