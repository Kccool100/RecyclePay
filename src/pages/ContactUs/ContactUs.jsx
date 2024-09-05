import React from 'react'
import './ContactUs.css'
import ContactHero from '../../components/Contact/ContactHero'
import Map from '../../components/Map/Map'
import Footer from '../../components/Footer/Footer'
import Email from '../../components/Email/Email'
import Review from '../../components/Review/Review'
const ContactUs = () => {
  return (
    <div className='ContactUs-container'>
       <ContactHero />
       <Map/>
       <Email/>
       <Review/>

       <Footer/>
    </div>
  )
}

export default ContactUs
