import React from 'react'
import FP from "../../assets/forget.png"
import "./ForgetPassword.css"
import { Link } from 'react-router-dom'
const ForgetPassword = () => {
  return (
    <div className='ForgetContainer'>
        <div className="ForgetForm">
            <h2>Oops Forget password?</h2>
            <div className="illus">
               <img src={FP} alt="FP" />
            </div>
            <div className="inputt">
                <input type="email" placeholder='Enter Email' />
            </div>
            
            <Link to="/Resetpassword" style={{textDecoration:"none"}}>
               <button>Continue</button>
            </Link>
            
        </div>

      
    </div>
  )
}

export default ForgetPassword
