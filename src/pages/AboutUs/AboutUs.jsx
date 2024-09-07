import React from 'react'
import './AboutUs.css'
import AboutHero from '../../components/AboutHero/AboutHero'
import Rate from '../../components/Rate/Rate'
import Story from '../../components/Story/Story'
import Team from '../../components/Team/Team'
import Footer from '../../components/Footer/Footer'
import TeamImg from '../../components/TeamImg/TeamImg'
const AboutUs = () => {
  return (
    <div className='AboutUs-container'>
      <AboutHero/>
      <Rate/>
      <Story/>
      <Team/>
      <TeamImg/>
      <Footer/>

    </div>
  )
}

export default AboutUs
