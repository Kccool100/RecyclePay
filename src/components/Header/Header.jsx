
import "./Header.css"
import Hamburger from "hamburger-react";
import { useContext, useState} from "react"
import { NavLink, Link } from 'react-router-dom';
import Logo from "../../assets/recycleLogo.png"
import { Theme } from '../Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider" 
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"


const getStyles = (mode) =>({
  background: {
      backgroundColor: Theme[mode].backgroundColor,
     
  },
  text:{
      color:Theme[mode].color
  },
  theme: {
      color:Theme[mode].highlight

  }
});
const Header = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
      <div className="headContainer" style={styles.background}>
        <div className='logoContainer'>
          <img src={Logo} alt="Logo" />
        </div>

        <div className="hamburger" style={styles.text} >
            <Hamburger  toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} />
      </div>
      <div className={`rightNav ${hamburgerIsOpen ? 'open' : ''}`} style={styles.background} >

        <div className='NavLink' >
            <NavLink to='/' className='link' style={styles.text}  >
              Home
            </NavLink>

            <NavLink to='/About' className='link'style={styles.text}>
              About Us
            </NavLink>

            <NavLink to='/Contact' className='link' style={styles.text}>
              Contact Us
            </NavLink>
        </div>
        <ThemeSwitch />
        <Link to="/SignUp" className='LogLink' style={{textDecoration:"none"}}>
        <button style={styles.background.text}>Waste Pickup</button>
        </Link>
             
            </div>

        </div>
       
  )
}

export default Header 
