import React from 'react'
import './Adminsidebar.css'
import logo from '../../assets/recycleLogo.png'
import MakeAdminButton from '../MakeAdmin/MakeAdminButton'


const Adminsidebar = () => {
  return (
    <div className='side-container'>
      <div className='sidetext'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='sidtext'>
                <h6>Application </h6>
            </div>
            <div className='sidtext'>
                 <MakeAdminButton/>
            </div>
         
         </div>
      <footer> Log Out</footer>     

    </div>
  )
}

export default Adminsidebar
