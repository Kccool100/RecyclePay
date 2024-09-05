import React from 'react'
import "./Hero.css"
import Carousel from 'react-bootstrap/Carousel';
import h1 from "../../assets/h1.png"
import h2 from "../../assets/h2.png"
import h3 from "../../assets/h3.png"

const Hero = () => {

  return (
    <div className='heroContainer'>
      <Carousel fade>
      <Carousel.Item>
        <img  src={h1} alt='h1'/>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={h2} alt='h2'/>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={h3} alt='h3'/>
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}

export default Hero
