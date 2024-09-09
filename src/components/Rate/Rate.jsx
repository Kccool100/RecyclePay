import React from 'react'
import "./Rate.css"
import gold from "../../assets/gold.png"

const Rate = () => {
  return (
    <div className='RateContainer'>
        <div className="subHead">
            <div className="goldimg">
               <img src={gold} alt="gold" />
            </div>
            <div className="rateHead">
               <h3>Our Rate</h3>
            </div>
        </div>
        <div className="rateText">
            <p>
            At RecyclePay, we believe in making recycling both simple and rewarding. That’s why we've set a flat rate of ₦400 per kilogram for all types of recyclable material whether you're bringing in plastic, paper, or metal, every kilogram is worth the same. This means that with just 10 kilograms of recyclables, you can earn ₦4,000, and with 20 kilograms, you'll receive ₦8,000. It’s a straightforward way to turn your waste into cash while contributing to a cleaner, greener environment.
            </p>
            <div className="kgg">1kg = 400 i.e  10kg =4000, 30kg = 12,000</div>
        </div>
      
    </div>
  )
}

export default Rate
