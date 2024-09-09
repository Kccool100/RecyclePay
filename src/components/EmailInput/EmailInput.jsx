import React from 'react'
import './Emailinput.css'
import picture from '../../assets/forget.png'
import { useNavigate } from 'react-router-dom'


const EmailInput = () => {
    const navigate = useNavigate()
  return (
    <div className='email-container'>
        <div className='email-box'>  
             <div className='emailmain'>
                  <h1> Oops Forget Password ?</h1>
                  <div className='imagebox'>
                    <img src={picture} alt="" />
                  </div>
                  <input type="email" placeholder='Enter Email' />
                  <button onClick={()=> navigate("/forgetpassword")}> Confirm </button>
             </div>
           </div>
      




    </div>
  )
}

export default EmailInput
