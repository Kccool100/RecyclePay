import React from 'react'
import "./Review.css"
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
const Review = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className='ReviewContainer' style={styles.background}>
      <div className="ReviewCon-box" style={styles.background}>
        <h3 style={styles.text}>Leave review</h3>
        {/* <div className="message" style={styles.text}>
            Message
        </div> */}
           <input type="email" placeholder='input valid Email address' required="true"/>
        <input type="text" placeholder='Description' />
        <button >Send a Message</button>
      </div>
    </div>
  )
}

export default Review
