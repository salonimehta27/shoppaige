import React from "react"
import { Carousel } from "react-bootstrap"
import "./ImageSlider.css"

function ImageSlider({ images }) {
	return (
		<Carousel className="carousel">
			{images.map((x) => (
				<Carousel.Item>
					<img className="d-block w-100" src={x.image_url} alt="First slide" />
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default ImageSlider
