import React from 'react'
import './Pickup.css'
import { useNavigate } from 'react-router-dom'

const Pickup = () => {

    const navigate = useNavigate()
  return (
    <div className='pick-container'>
        <div className='pick-box'>  
        <div className='detailsbox'>
            <div className='pickhead'> 
                <div className='arrow'></div>
            <h1> Pick Up Details</h1>
            </div>
          <div className='pickupinput'>

            <div className='inpick'> 
                <div className='pickuptext'>
                    <h3> Name</h3>
                </div>
                <input type="text" name="" id="" />
            </div>
            <div className='inpick'> 
                <div className='pickuptext'>
                    <h3> Address</h3>
                </div>
                <input type="text" name="" id="" />
            </div>
            <div className='inpick'> 
                <div className='pickuptext'>
                    <h3> Email</h3>
                </div>
                <input type="text" name="" id="" />
            </div>
            <div className='inpick'> 
                <div className='pickuptext'>
                    <h3> P.Number</h3>
                </div>
                <input type="text" name="" id="" />
            </div>
            <div className='inpick'> 
                <div className='pickuptext'>
                    <h3> Waste Kg</h3>
                </div>
               <label htmlFor="">
               <select name="" id="">
                    
                    <option value=""> 10Kg </option>
                    <option value=""> 20Kg </option>
                    <option value=""> 30Kg </option>
                    <option value=""> Other </option>
                </select>
               </label>
            </div>
          </div>
        
          <button onClick={()=> navigate("/Pickupconfirmed")}> Next </button>
        </div>
           </div>
      




    </div>
  )
}

export default Pickup
