
import "./Footer.css"
import logo from "../../assets/recyclelogo2.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate()
    return (

        <div className="FooterContainer">
            <div className="footerBox">
               
                <div className="list">
                    <ul>
                        <p onClick={()=> navigate("/")} style={{cursor:"pointer"}}>Home</p>
                        <span className="futt" onClick={()=> navigate("/SignUp")}>Waste Pick</span>
                        <div className="logoimg">
                            <img src={logo} alt="logo" />
                        </div>
                        
                    </ul>
                    <ul>
                        <p onClick={()=> navigate("/About")} style={{cursor:"pointer"}}>About Us</p>
                        <span className="futt">Our Story</span>
                        <span className="futt">Our Team</span>
                        <span className="futt">Our Rate</span>
                        <div className="social">
                           <FaFacebook style={{cursor:"pointer"}} />
                           <FaTwitter style={{cursor:"pointer"}} />
                           <FaInstagram  style={{cursor:"pointer"}}/>
                        </div>
                      
                    </ul>
               
                    <ul>
                        <p onClick={()=> navigate("/Contact")} style={{cursor:"pointer"}}>Contact Us</p>
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
               <FaFacebook style={{cursor:"pointer"}} />
            </div>
            <div className="icn">
             <FaTwitter style={{cursor:"pointer"}} />
            </div>
            <div className="icn">
              <FaInstagram style={{cursor:"pointer"}} />
            </div>
          </div>
        </div>
                
            </div>
           
        </div >


    )
}

export default Footer