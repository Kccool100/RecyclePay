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
        <div className="con1">
            <p>Our Email</p>
            <span>Recyclepay7@gmail.com</span>
        </div>
        <div className="con2">
          <p>Our Social</p>
           <span>X @recyclepay </span>
           <span>Facebook @recyclepay</span>
           <span>Whatsapp @+23470235927</span>
           <span>Instagram @recyclepay</span> 
        </div>
        <div className="con3">
            <p>Contact Us</p>
            <span>Address:</span>
            <span>149. Bamgbose Street,</span>
            <span>Lagos-Island, Lagos, Nigeria.</span>
            <li>Phones: 07025235927, 08132601195</li>
        </div>

        </div>
       
       
    </div>
  )
}

export default Email
