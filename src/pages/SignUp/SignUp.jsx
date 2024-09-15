import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./SignUp.css"

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
const SignUp = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    location:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="SignUpCon" >
      <form onSubmit={handleSubmit} className="SigUpForm" style={styles.background}>
        <h2>Sign Up With RecyclePay</h2>
        <label>
          <input 
            placeholder='Name'
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required   
            
            style={styles.background}
          />
        </label>
        <label>
          <input 
            placeholder='Email'
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={styles.background}

          />
        </label>
        <label>
          <input 
            placeholder='Password'
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            style={styles.background}

          />
        </label>
        <label>
          <input 
            placeholder='Phone Number'
            type="number" 
            name="phone number" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required 
            style={styles.background}

          />
        </label>
        <label>
          <input 
            placeholder='Location'
            type="text" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            required 
            style={styles.background}

          />
        </label>
        <div className="radio">
        <input type="radio" />
        <Link to="/Terms" style={{textDecoration:"none"}}>
              <p style={styles.text}>I accept Terms and Conditions</p>
            </Link>
        </div>
          
        <Link to='/Login'  style={{textDecoration:"none"}}>
          <button type="submit">Sign Up</button>
        </Link>
        <div className="logg">
                <p style={styles.text}>if you already have an account </p>
                <Link to='/Login'  style={{textDecoration:"none"}}><p style={styles.text}>Sign in</p></Link>
            </div>
      </form>
    </div>
  );
};

export default SignUp;





    