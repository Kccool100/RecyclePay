import React from 'react'
import "./Email.css"
import hand from "../../assets/hand.png"
import obj from "../../assets/obj.png"
const Email = () => {
  return (
    <div className='EmailContainer'>
        <div className="con-holder">
        <div className="con1">
            <p>Our Email</p>
            <span>Recyclepay7@gmail.com</span>
        </div>
        <div className="con2">
          <p>Our Social</p>
           <span>X @recyclepay </span>
           <span>Facebook @recyclepay</span>
           <span>Whatsapp @+23470235927</span>
           <span>Instagram @recyclepay</span> 
        </div>
        <div className="con3">
            <p>Contact Us</p>
            <span>Address:</span>
            <span>149. Bamgbose Street,</span>
            <span>Lagos-Island, Lagos, Nigeria.</span>
            <li>Phones: 07025235927, 08132601195</li>
        </div>

        </div>
       
       
    </div>
  )
}

export default Email
