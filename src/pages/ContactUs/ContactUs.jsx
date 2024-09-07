import React from 'react'
import './ContactUs.css'
import ContactHero from '../../components/Contact/ContactHero'
import Map from '../../components/Map/Map'
import Footer from '../../components/Footer/Footer'
import Email from '../../components/Email/Email'
import Review from '../../components/Review/Review'
import Header from '../../components/Header/Header'
const ContactUs = () => {
  return (
    <div className='ContactUs-container'>
       <Header/>
       <ContactHero />
       <Map/>
       <Email/>
       <Review/>
       <Footer/>
    </div>
  )
}

export default ContactUs
