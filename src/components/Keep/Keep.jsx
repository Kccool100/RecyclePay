import React from 'react'
import "./Keep.css"
import Frame3 from "../../assets/Frame3.png"
import { useContext} from "react"
import { Theme } from '../Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider" 
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"


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
const Keep = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className='KeepContainer' style={styles.background}>
        <h3 style={styles.text}>Keep your environment safe as you make money</h3>
        <div className="KeepContainer-holder">
           <div className="picture2">
            <img src={Frame3} alt="Frame3" />

           </div>
      <div className="texts">
        <p style={styles.text}>RecyclePay makes it easy for you to take care of your environment while earning money. Every time you recycle, you’re reducing waste, conserving resources, and helping to keep our neighborhoods clean and safe. This isn’t just about what’s in it for you; it’s about the bigger picture. A cleaner environment means healthier living conditions, less pollution, and a sustainable future for everyone. By turning your recyclables into cash, you’re making a positive impact on your community and the planet one item at a time. So, join us in making a difference, and let’s build a greener, more prosperous Lagos together.</p>
      </div>
      
   
    </div>
      
    </div>
  )
}

export default Keep
