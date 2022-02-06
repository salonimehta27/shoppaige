import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./ImageSlider.css"
// import CarouselItems from "./CarauselItems"
import SimpleImageSlider from "react-simple-image-slider";
// import {Carousel} from "react-bootstrap"

function ImageSlider({images}) {
   console.log(images)
//    images.map()
  return (
    <Carousel className="carousel">
      {images.map((x)=><Carousel.Item>
    <img
      className="d-block w-100"
      src={x.image_url}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item> )} 
  {/* {images.map(x=><CarouselItems url={x.image_url}></CarouselItems>)} */}
  </Carousel>
  )
}

export default ImageSlider;
