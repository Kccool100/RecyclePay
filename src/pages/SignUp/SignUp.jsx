import { Link } from "react-router-dom";
import "./SignUp.css"
function SignUp() {
  return (
    <div className='SignUpCon'>
        <div className="SignUpForm">
            <h3>Sign Up with RecyclePay</h3>
            <div className="SignUpinput">
                <input type="text" placeholder="Name"/>
            </div>
            <div className="SignUpinput">
                <input type="email" placeholder="Email"/>
            </div>
            <div className="SignUpinput">
                <input type="number" placeholder="Phone Number "/>
            </div>
            <div className="SignUpinput">
                <input type="password" placeholder="Password"/>
            </div>

            <div className="SignUpinput">
                <input type="text"  placeholder="Location"/>
            </div>
            <div className="radio">
            <label class="custom-radio">
              <input type="radio"  />
              <span class="radio-indicator"></span>
            </label>
            <Link to="/Terms" style={{textDecoration:"none"}}>
              <p>I accept Terms and Conditions</p>
            </Link>
            </div>
            <Link to='/Login'  style={{textDecoration:"none"}}>
               <button>Sign Up</button>
            </Link>

            <div className="logg">
                <p>if you already have an account </p>
                <Link to='/Login'  style={{textDecoration:"none"}}><p>Sign in</p></Link>
            </div>
        </div>


    </div>
    
  );
}

export default SignUp;