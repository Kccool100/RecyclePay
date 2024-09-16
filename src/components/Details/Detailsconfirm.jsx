import React from 'react'
import './Detailsconfirm.css'
import { Link, useNavigate } from 'react-router-dom'

const Detailsconfirm = () => {

  const navigate = useNavigate()
  return (
    <div className='pconfirm'>
      <div className='pconfirm-box'>
        <div className='Confirm'>
          <div className='pconfirmhead'>
            <h1> Confirm Info</h1>
          </div>
          <div className='confirmdetails'>
            <div className='inp'>
              <div className='ptext'>
                <h3> Name : </h3>
              </div>
              <div className='infotext'>
                <h3> Adenekan Ifeoluwa</h3>
              </div>
            </div>
            <div className='inp'>
              <div className='ptext'>
                <h3> Address : </h3>
              </div>
              <div className='infotext'>
                <h3> 121 Muyibi Street</h3>
              </div>
            </div>
            <div className='inp'>
              <div className='ptext'>
                <h3> P.Number : </h3>
              </div>
              <div className='infotext'>
                <h3> 08176764038</h3>
              </div>
            </div>
            <div className='inp'>
              <div className='ptext'>
                <h3> Waste Kg : </h3>
              </div>
              <div className='infotext'>
                <h3> 30Kg</h3>
              </div>
            </div>
          </div>
          <div className='reconfirm'>
            <h2> We Will Be At The Stated Adress In The Next 3 Working Day</h2>
            <h2> After Your Request Has Been Confirmed</h2>
          </div>
          <Link to="/Pickupconfirmed" style={{ textDecoration: "none" }}>
            <button>Confirm</button>
          </Link>
        </div>
      </div>
    </div> 
  )
}

export default Detailsconfirm
