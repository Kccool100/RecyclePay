import React from 'react'
import './Userdashboard.css'
import Usersidebar from '../../components/Usersidebar/Usersidebar'
import Usermain from '../../components/Usermain/Usermain'



const Userdashboard = () => {
  return (
    <div className='user-container'>
        <Usersidebar/>
        <Usermain/>
    
      

    </div>
  )
}

export default Userdashboard
