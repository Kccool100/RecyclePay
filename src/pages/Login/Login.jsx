import "./Login.css"
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className='LoginCon'>
        <div className="LoginForm">
            <h3>Sign In with RecyclePay</h3>
            <div className="Logininput">
                <label>Email</label>
                <input type="email" />
            </div>
            <div className="Logininput">
                <label>Password</label>
                <input type="password" />
            </div>
            <Link to="/Pick" style={{textDecoration:"none"}}>
               <button>Sign In</button>
            </Link>
            <div className="log">
              <Link to="/ForgetPassword" style={{textDecoration:"none"}}>
                 <p>Forget Password?</p>
              </Link>
            </div>
        </div>
   
    </div>
   
  );
}

export default Login;