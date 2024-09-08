import "./Login.css"
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className='LoginCon'>
        <div className="LoginForm">
            <h3>Sign In with RecyclePay</h3>
            <div className="input">
                <label>Email</label>
                <input type="email" />
            </div>
            <div className="input">
                <label>Password</label>
                <input type="password" />
            </div>
            <button>Sign In</button>
            <div className="log">
              <Link to="/ForgetPassword">
                 <p>Forget Password?</p>
              </Link>
            </div>
        </div>
   
    </div>
   
  );
}

export default Login;