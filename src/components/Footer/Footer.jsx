
import "./Footer.css"
import logo from "../../assets/recyclelogo2.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (

        <div className="FooterContainer">
            <div className="footerBox">
               
                <div className="list">
                    <ul>
                        <p>Home</p>
                        <span>Waste Pick</span>
                        <div className="logoimg">
                            <img src={logo} alt="logo" />
                        </div>
                        
                    </ul>
                    <ul>
                        <p>About Us</p>
                        <span>Our Story</span>
                        <span>Our Team</span>
                        <span>Our Rate</span>
                        <div className="social">
                           <FaFacebook  />
                           <FaTwitter  />
                           <FaInstagram  />
                        </div>
                      
                    </ul>
               
                    <ul>
                        <p>Contact Us</p>
                        <span>Phone:</span>
                        <span> 07025235927,  08132601195</span>
                        <span>Recyclepay7@gmail.com</span>

                        <div className="emailCon">
                            <label>Send us a mail </label>
                            <input type="email" placeholder="Email Address" />
                            <div className="emailbutn">
                            Send
                            </div>

                        </div>

                    </ul>
                </div>
                <div className="list2">
          <div className="foottext">
            <span>   © 2024 RecyclePay. All rights reserved. </span>
          </div>
          <div className="socials">
            <div className="icn">
               <FaFacebook  />
            </div>
            <div className="icn">
             <FaTwitter  />
            </div>
            <div className="icn">
              <FaInstagram  />
            </div>
          </div>
        </div>
                
            </div>
           
        </div >


    )
}

export default Footer