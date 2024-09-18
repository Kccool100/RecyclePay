import React from 'react'
import FP from "../../assets/forgot.png"
import "./ForgetPassword.css"
import { Link } from 'react-router-dom'
import { useContext} from "react"
import { Theme } from '../../components/Theme/Theme';
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
const ForgetPassword = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className='ForgetContainer'>
        <div className="SigUpForm" style={styles.background}>
            <h2  style={styles.text}>Oops Forget password?</h2>
            <div className="illus" >
               <img src={FP} alt="FP" />
            </div>
            <label>
          <input 
            placeholder='Email'
            type="email" 
            required 
            style={styles.background}
          />
        </label>
            
            <Link to="/ResetPassword" style={{textDecoration:"none"}}>
             <div className='forgetbutton'>   <button >Continue</button></div>
            </Link>
            
        </div>

      
    </div>
  )
}

export default ForgetPassword
