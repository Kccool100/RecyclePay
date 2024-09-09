import React from 'react'
import './Rpassword.css'
import { useNavigate } from 'react-router-dom'
import group from '../../assets/Group.png'
const Rpassword = () => {
    const navigate = useNavigate()
  return (
    <div className='reset-container'>
        <div className='reset-box'>  
        <div className='emoji'>
            <div className='smiley'>
              <img src={group} alt="" />
            </div>
            <div className='resettext'>
                
           <h1> HAPPY NOW!!!</h1>
           <h2> Your Password Has Been Reset Successfully</h2>
           <h2> Now Sign In With Your New Password</h2>
            </div>
            <button onClick={()=> navigate("/Login")}>  Sign In</button>
        </div>
           </div>
      




    </div>
  )
}

export default Rpassword
