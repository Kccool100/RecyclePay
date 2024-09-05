
import "./Footer.css"
import logo from "../../assets/recyclelogo2.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
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
                        <div className="socials">
                            <img src={facebook} alt="facebook" />
                            <img src={twitter} alt="twitter" />
                            <img src={instagram} alt="instagram" />
                       </div>
                      
                    </ul>
               
                    <ul>
                        <p>Contact Us</p>
                        <span>Phone:</span>
                        <li> 07025235927,  08132601195</li>

                        <div className="emailCon">
                            <label>Send us a mail </label>
                            <input type="email" placeholder="Email Address" />
                            <button>Send</button>

                        </div>

                    </ul>
                </div>
                
            </div>
           
        </div >


    )
}

export default Footer