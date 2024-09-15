import React from 'react'
import FP from "../../assets/forgot.png"
import "./ForgetPassword.css"
import { Link } from 'react-router-dom'
const ForgetPassword = () => {
  return (
    <div className='ForgetContainer'>
        <div className="SigUpForm">
            <h2>Oops Forget password?</h2>
            <div className="illus">
               <img src={FP} alt="FP" />
            </div>
            <label>
          <input 
            placeholder='Email'
            type="email" 
            required 
          />
        </label>
            
            <Link to="/ResetPassword" style={{textDecoration:"none"}}>
               <button>Continue</button>
            </Link>
            
        </div>

      
    </div>
  )
}

export default ForgetPassword
