import "./Login.css"
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
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
    <form onSubmit={handleSubmit} className="SigUpForm">
      <h2>Sign In With RecyclePay</h2>
   
      <label>
        <input 
          placeholder='Email'
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
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
        />
        </label>
 
   
      <Link to='/Pick'  style={{textDecoration:"none"}}>
        <button type="submit">Sign In</button>
      </Link>
      <div className="logg">
              <Link to='/forgetpassword'  style={{textDecoration:"none"}}><p>Forgot password ?</p></Link>
          </div>
    </form>
  </div>
);
};

export default Login;





















