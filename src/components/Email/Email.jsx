import React from 'react'
import "./Email.css"
import hand from "../../assets/hand.png"
import obj from "../../assets/obj.png"
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
const Email = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className='EmailContainer' style={styles.background}>
        <div className="con-holder" style={styles.background}>
        <div className="con1" style={styles.background}>
            <p style={styles.text}>Our Social</p>
           <span style={styles.text}>X @recyclepay </span>
           <span style={styles.text}>Facebook @recyclepay</span>
           <span style={styles.text}>Whatsapp @+23470235927</span>
           <span style={styles.text}>Instagram @recyclepay</span> 
        </div>
        <div className="con2" style={styles.background}> 
          <p style={styles.text}>Our Email</p>
          <span style={styles.text}>Recyclepay7@gmail.com</span>
        </div>
        <div className="con3" style={styles.background}>
            <p style={styles.text}>Contact Us</p>
            <span style={styles.text}>Address:</span>
            <span style={styles.text}>149. Bamgbose Street,</span>
            <span style={styles.text}>Lagos-Island, Lagos, Nigeria.</span>
            <li style={styles.text}>Phones: 07025235927, 08132601195</li>
        </div>

        </div>
       
       
    </div>
  )
}

export default Email
