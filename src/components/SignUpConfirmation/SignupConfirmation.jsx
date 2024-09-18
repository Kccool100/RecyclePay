import React from 'react'
import './SignupConfirmation.css'
import { useNavigate } from 'react-router-dom'
import confirm from '../../assets/confirm.png'

const SignupConfirmation = () => {

  const navigate = useNavigate()
  return (
    <div className='confirm-container'>
        <div className='imagebox'>  
        <img src={confirm} alt="" />
           </div>

           <div className='confirmtext'>
            <h1> Confirm Your Email</h1>
            <h2>You're Almost Ready To Start Enjoying Recyclepay.</h2>
            <h2>Just Confirm Your Email Address By Clicking On</h2>
            <h2>The Orange Button Below</h2>
            <button onClick={()=> navigate("/Login")}>
              Verify Email Address
            </button>
           </div>
      




    </div>
  )
}

export default SignupConfirmation
