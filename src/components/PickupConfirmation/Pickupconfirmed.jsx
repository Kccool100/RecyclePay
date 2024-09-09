import React from 'react'
import './Pickupconfirmed.css'
import svg from "../../assets/svg.png"
import logo from '../../assets/recycleLogo.png'

const Pickupconfirmed = () => {
  return (
    <div className='confirmed'>
        <div className='confirmedblur'>  
          <div className='confirmedbox'>
            <div className='confirmedheader'>
                       <img src={logo} alt="" />
            </div>
            <div className='thankyou'>
                <h1> Thank You </h1>
                <h2> Your Request Has Been Confirmed</h2>
                <div className="svg">
                  <img src={svg} alt="svg" />
                </div>  
            </div>
          </div>
           </div>
      




    </div>
  )
}

export default Pickupconfirmed
