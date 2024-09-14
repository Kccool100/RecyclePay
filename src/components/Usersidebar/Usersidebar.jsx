import React from 'react'
import './Usersidebar.css'
import userlogo from '../../assets/recycleLogo.png'


const Usersidebar = () => {
  return (
    <div className='userside-container'>
      <div className='usersidetext'>
        <div className='userlogo'>
            
            <img src={userlogo} alt="" />
        </div>
        <div className='usersidtext'>
                <h6>Application </h6>
            </div>
            <div className='usersidext'>
                <h6> User</h6>
            </div>
         
         </div>
      <footer> Log Out</footer>     

    </div>
  )
}

export default Usersidebar