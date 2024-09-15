import React from 'react'
import './Pickup.css'
import { Link } from "react-router-dom";

const Pickup = () => {

  return (
           <div className="pick-container">
            <div className="pickblur">
            <form  className="SigUpForm">
      <h2>Pick Up Details</h2>
   
      <label>
        <input 
          placeholder='Name'
          type="text" 
          required
        />
      </label>
      <label>
        <input 
          placeholder='Email'
          type='email'
          required 
        />
        </label>
        <label>
        <input 
          placeholder='Address'
          type='text'
          required 
        />
        </label>
        <label>
        <input 
          placeholder='Phone Number'
          type='number'
          required 
        />
        </label>
        <label>
        <select placeholder='Waste Kg'>
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
