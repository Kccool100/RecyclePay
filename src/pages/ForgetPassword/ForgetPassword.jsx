import React from 'react'
import FP from "../../assets/forget.png"
import "./ForgetPassword.css"
const ForgetPassword = () => {
  return (
    <div className='LoginContainer'>
        <div className="LoginForm">
            <h2>Oops Forget password?</h2>
            <div className="illus">
               <img src={FP} alt="FP" />
            </div>
            <div className="inputt">
                <input type="email" placeholder='Enter Email' />
            </div>
            
            <button>Continue</button>
            
        </div>

      
    </div>
  )
}

export default ForgetPassword
