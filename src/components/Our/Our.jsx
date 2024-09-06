import React from 'react'
import "./Our.css"
import Frame5 from "../../assets/Frame5.png"

const Our = () => {
  return (
    <div className="OurContainer">
        <h3>Our Rate </h3>
    <div className="OurContainer-holder">
    
      <div className="text">
        <p>With RecyclePay, earning money while recycling has never been easier. We offer a straightforward rate of ₦400 for every kilogram of recyclables you bring in no matter the type. Whether you’re recycling plastic, paper, or metal, each kilogram adds up to cash in your pocket. For example, with just 10kg of recyclables, you can earn ₦4,000, and for 20kg, you’ll receive ₦8,000. Our simple, transparent pricing means you can quickly see the value of your efforts and get paid instantly, either through bank transfer or cash. Join us in making a positive impact on the environment while boosting your income.</p>
        <div className="kg">1kg = 400 i.e  10kg =4000, 30kg = 12,000</div>
      </div>
      <div className="picture3">
        <img src={Frame5} alt="Frame5" />
      </div>
   
    </div>
    
  </div>
  )
}

export default Our
