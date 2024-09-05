import React from 'react'
import "./ContactHero.css"
import Carousel from 'react-bootstrap/Carousel';
import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"

const ContactHero = () => {
  return (
    <div className='ContactHeroContainer'>
    <Carousel fade>
      <Carousel.Item>
        <img  src={c1} alt='c1'/>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={c2} alt='c2'/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ContactHero
