
import "./Header.css"
import Hamburger from "hamburger-react";
import { useState} from "react"
import { NavLink, Link } from 'react-router-dom';
import Logo from "../../assets/recycleLogo.png"
const Header = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  return (
      <div className="headContainer">
        <div className='logoContainer'>
          <img src={Logo} alt="Logo" />
        </div>

        <div className="hamburger" >
            <Hamburger  toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} />
      </div>
      <div className={`rightNav ${hamburgerIsOpen ? 'open' : ''}`} >

        <div className='NavLink' >
            <NavLink to='/Home' className='link' style={{textDecoration:"none", }}  >
              Home
            </NavLink>

            <NavLink to='/About' className='link' style={{textDecoration:"none"}}>
              About Us
            </NavLink>

            <NavLink to='/Contact' className='link' style={{textDecoration:"none"}}>
              Contact Us
            </NavLink>
            </div>
            <Link to="/SignUp" className='LogLink' style={{textDecoration:"none"}}>
               <button >Waste Pickup</button>
            </Link>
             
            </div>

        </div>
       
  )
}

export default Header 
