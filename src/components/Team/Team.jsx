import React from 'react'
import "./Team.css"
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
const Team = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className='TeamContainer' style={styles.background}>
      <h3 style={styles.text}>Our Team</h3>
      <div className="rateText">
        <p style={styles.text}>At RecyclePay, our team is the driving force behind our mission to make recycling easy, rewarding, and impactful. Our product designer plays a crucial role in crafting an intuitive and engaging experience, ensuring that every user interaction is smooth and satisfying. Our frontend developers bring this vision to life, creating a user-friendly interface that makes it simple for anyone to navigate the app, whether they’re scheduling a pickup or receiving payment. Behind the scenes, our backend developers work diligently to build a secure and reliable system that processes payments quickly whether it's through bank transfer or cash on-site ensuring you get paid instantly when your recyclables are collected.</p>

        <p style={styles.text}>Together, this talented team collaborates to ensure that RecyclePay not only meets but exceeds the expectations of our users. Our collective focus is on delivering a platform that empowers you to contribute to a cleaner environment while being rewarded for your efforts, all with the ease and reliability you deserve.</p>
      </div>
    </div>
  )
}

export default Team
