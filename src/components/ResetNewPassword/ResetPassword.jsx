import { Link } from "react-router-dom";
import "./ResetPassword.css"
function ResetPassword() {
  return (
    <div className='LoginCon'>
        <div className="LoginForm">
            <h3>Reset Your Password?</h3>
            <div className="inputt">
                <input type="password" placeholder="New Password"/>
            </div>
            <div className="inputt">
                <input type="password" placeholder="Confirm Password"/>
            </div>
            <Link to="/Rpassword" style={{textDecoration:"none"}}>
            <button>Continue</button>
            </Link>
            
        </div>
   
    </div>
   
  );
}

export default ResetPassword;