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
                <input type="text" placeholder='Name' name="" id="" />
            </div>
            <div className='inpick'> 
                
                <input type="text" placeholder='Address' name="" id="" />
            </div>
            <div className='inpick'> 
               
                <input type="text" placeholder=' Email' name="" id="" />
            </div>
            <div className='inpick'> 
               
                <input type="text" placeholder='Phone Number' name="" id="" />
            </div>
            <div className='inpick'> 
               <label htmlFor="">
               <select name="" id="" placeholder="Waste Kg">
                    
                    <option value=""> 10Kg </option>
                    <option value=""> 20Kg </option>
                    <option value=""> 30Kg </option>
                    <option value=""> Other </option>
                </select>
               </label>
            </div>
          </div>
        
          <button onClick={()=> navigate("/Detailsconfirm")}> Next </button>
        </div>
           </div>
      




    </div>
  )
}

export default Pickup
