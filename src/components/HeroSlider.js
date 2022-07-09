import React from 'react'
import { Carousel } from 'react-bootstrap'

const HeroSlider = () => {
  return (
    <div>
        <Carousel>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?cs=srgb&dl=pexels-pixabay-235615.jpg&fm=jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Making it real</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?cs=srgb&dl=pexels-pixabay-247431.jpg&fm=jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Just having fun</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?cs=srgb&dl=pexels-pixabay-355321.jpg&fm=jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Nothing to say</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1643403/pexels-photo-1643403.jpeg?cs=srgb&dl=pexels-visually-us-1643403.jpg&fm=jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>The last one</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default HeroSlider