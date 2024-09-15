import { Link } from "react-router-dom";
import "./ResetPassword.css"
function ResetPassword() {
  return (
    <div className='LoginCon'>
        <div className="SigUpForm">
            <h2>Reset Your Password?</h2>
            <label>
          <input 
            placeholder='New Password'
            type="password" 
            required 
          />
        </label>
        <label>
          <input 
            placeholder='Confirm Password'
            type="password" 
            required 
          />
        </label>
            <Link to="/Rpassword" style={{textDecoration:"none"}}>
            <button>Continue</button>
            </Link>
            
        </div>
   
    </div>
   
  );
}

export default ResetPassword;