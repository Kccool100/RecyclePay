import React from 'react'
import "./Pick.css"
import { Link } from 'react-router-dom'

const Pick = () => {
    
  return (
    <div className='PickContainer'>
        <div className="PickForm">
            <h3>Pick Up Details</h3>
            <div className="Pickinput">
                <label>Name</label>
                <input type="text" />
            </div>
            <div className="Pickinput">
                <label>Address</label>
                <input type="text" />
            </div>
            <div className="Pickinput">
                <label>Email</label>
                <input type="email" />
            </div>
            <div className="Pickinput">
                <label>Phone Number</label>
                <input type="number" />
            </div>
            <div className="Pickinput">
                <label>Waste Kg</label>
                <select>
                    <option value="">10Kg</option>
                    <option value="">20Kg</option>
                    <option value="">30Kg</option>
                    <option value="">Others</option>
                </select>
            </div>
            <Link to="/Detailsconfirm"  style={{textDecoration:"none"}}>
            <button>Next</button>
            </Link>
        </div>

      
    </div>
  )
}

export default Pick
