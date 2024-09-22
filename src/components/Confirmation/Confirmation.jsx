import React from 'react'
import './Confirmation.css'
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
            <h2>You're Almost Ready To Start Enjoiying Recyclepay.</h2>
            <h2>Just Verify From Your Email Address </h2>
          
           </div>
      




    </div>
  )
}

export default SignupConfirmation
