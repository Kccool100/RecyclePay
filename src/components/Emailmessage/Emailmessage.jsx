import React from "react";
import './Emailmessage.css'
import logo from '../../assets/recyclelogo2.png'


const Emailmessage = () => {
    return(
        <div className="messagebox">
                  <header> 
                    <img src={logo} alt="" />
                    <p>RecyclePay Confirmation Info</p>
                  </header>
                  <div className="emailmessage">
                    <p> Hello Ifeoluwa,</p>
                    <p> Waste Recycling Order Confirmation.<p/>
                        <p> Thank you for placing an order with us. Your request has been confirmed and will be available
                        <br/> for pickup in the next three working days.</p>
                        <p> Pick Up Details</p>
                        <p> Name: Folake Racheal, Address: 2 Nihinolawa coker Street, Lagos., Phone Number:
                        <br/> 08176764038, WasteKg: 20Kg</p>
                        <p> If you did not create an account, please ignore this email.</p>
                        <p> Best regards,</p>
                        <p> The Waste Recycling Team.</p>
                        
                    </p>
                  </div>
        </div>
    )
}

export default Emailmessage