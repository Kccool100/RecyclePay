import "./Login.css"
import { useState } from "react";
import { Link } from "react-router-dom";

import { useContext} from "react"
import { Theme } from '../../components/Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider" 


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
const Login = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
   
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log('Form data:', formData);
  };

return (
  <div className="loginCon">
    <form onSubmit={handleSubmit} className="SigUpForm"  style={styles.background}>
      <h2>Sign In With RecyclePay</h2>
   
      <label>
        <input 
          placeholder='Email'
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={styles.background}
        />
      </label>
      <label>
        <input 
          placeholder='Password'
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
          style={styles.background}
        />
        </label>
 
   
      <Link to='/Userdashboard'  style={{textDecoration:"none"}}>
        <div  className="buttonin"> <button type="submit">Sign In</button></div>
      </Link>
      <div className="logg">
              <Link to='/forgetpassword'  style={{textDecoration:"none"}}><p style={styles.text}>Forgot password ?</p></Link>
          </div>
    </form>
  </div>
);
};

export default Login;





















