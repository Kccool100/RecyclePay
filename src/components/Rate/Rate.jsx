import React from 'react'
import "./Rate.css"
import gold from "../../assets/gold.png"

import { useContext} from "react"
import { Theme } from '../Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider" 


const getStyles = (mode) =>({
  background: {
      backgroundColor: Theme[mode].backgroundColor,
     
  },
  text:{
      color:Theme[mode].color
  },
  theme: {
      color:Theme[mode].highlight

  }
});
const Rate = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className='RateContainer' style={styles.background}>
        <div className="subHead">
            <div className="goldimg">
               <img src={gold} alt="gold" />
            </div>
            <div className="rateHead">
               <h3 style={styles.text}>Our Rate</h3>
            </div>
        </div>
        <div className="rateText">
            <p style={styles.text}>
            At RecyclePay, we believe in making recycling both simple and rewarding. That’s why we've set a flat rate of ₦400 per kilogram for all types of recyclable material whether you're bringing in plastic, paper, or metal, every kilogram is worth the same. This means that with just 10 kilograms of recyclables, you can earn ₦4,000, and with 20 kilograms, you'll receive ₦8,000. It’s a straightforward way to turn your waste into cash while contributing to a cleaner, greener environment.
            </p>
            <div className="kgg" style={styles.text}>1kg = 400 i.e  10kg =4000, 30kg = 12,000</div>
        </div>
      
    </div>
  )
}

export default Rate
