import React from 'react'
import Adminsidebar from '../../components/Adminsidebar/Adminsidebar'
import Adminmain from '../../components/Adminmain/Adminmain'
import "./Admindashboard.css"

const Admindashboard = () => {
  return (
    <div className='Admin-container'>
     <Adminsidebar/>
     <Adminmain/>
      

    </div>
  )
}

export default Admindashboard
