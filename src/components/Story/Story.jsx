import React from 'react'
import "./Story.css"
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
const Story = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className='StoryContainer' style={styles.background}>
      <h3 style={styles.text}>Our Story</h3>
      <div className="rateText">
        <p style={styles.text}>RecyclePay was born out of a deep commitment to solving the waste management challenges faced by urban communities in Lagos, Nigeria. The founders, concerned by the growing waste problem and its impact on the environment, saw an opportunity to turn waste into a valuable resource. They envisioned a platform where people could not only contribute to a cleaner environment but also earn money by recycling. RecyclePay was created to empower individuals to take action, rewarding them for their efforts in reducing waste and promoting sustainability. With a focus on convenience and impact, RecyclePay is changing the way people think about waste, one recyclable at a time.</p>
      </div>
    </div>
  )
}

export default Story
