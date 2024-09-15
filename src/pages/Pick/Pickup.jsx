import React from 'react'
import './Pickup.css'
import { Link } from "react-router-dom";

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
const Pickup = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);

  return (
           <div className="pick-container">
            <div className="pickblur">
            <form  className="SigUpForm" style={styles.background}>
      <h2>Pick Up Details</h2>
   
      <label>
        <input 
          placeholder='Name'
          type="text" 
          required
          style={styles.background}
        />
      </label>
      <label>
        <input 
          placeholder='Email'
          type='email'
          required 
          style={styles.background}
        />
        </label>
        <label>
        <input 
          placeholder='Address'
          type='text'
          required 
          style={styles.background}
        />
        </label>
        <label>
        <input 
          placeholder='Phone Number'
          type='number'
          required 
          style={styles.background}
        />
        </label>
        <label>
        <select placeholder='Waste Kg' style={styles.background}>
          <option value=""> 10Kg </option>
          <option value=""> 20Kg </option>
          <option value=""> 30Kg </option>
          <option value=""> 40Kg </option>
          <option value=""> 50Kg </option>
          <option value=""> 60Kg </option>
          <option value=""> 70Kg </option>

        </select> 
        </label>
   
      <Link to='/Detailsconfirm'  style={{textDecoration:"none"}}>
        <button type="submit">Next</button>
      </Link>
     
    </form>
            </div>
   
  </div>
);
};

export default Pickup;
