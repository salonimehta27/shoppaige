import React, { useEffect } from "react"
import ReviewsDisplay from "./ReviewsDisplay"

function Reviews({ productId, setReviews, reviews }) {
	useEffect(() => {
		fetch(`/reviews_by_product/${productId}`)
			.then((res) => res.json())
			.then((data) => setReviews(() => [...reviews, data]))
	}, [])
	const review_list = reviews.map((x) =>
		x.map((review) => <ReviewsDisplay review={review} />)
	)
	return <div style={{ marginTop: "10px" }}>{reviews ? review_list : null}</div>
}

export default Reviews
