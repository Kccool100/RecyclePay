import { Link } from "react-router-dom";
import "./SignUp.css"
function SignUp() {
  return (
    <div className='SignUpCon'>
        <div className="SignUpForm">
            <h3>Sign Up with RecyclePay</h3>
            <div className="input">
                <label>Name</label>
                <input type="text" />
            </div>
            <div className="input">
                <label>Email</label>
                <input type="email" />
            </div>
            <div className="input">
                <label>P.Number</label>
                <input type="number" />
            </div>
            <div className="input">
                <label>Password</label>
                <input type="password" />
            </div>

            <div className="input">
                <label>Location</label>
                <input type="text" />
            </div>
            <div className="radio">
            <label class="custom-radio">
              <input type="radio"  />
              <span class="radio-indicator"></span>
            </label>
                <p>I accept Terms and Conditions</p>
            </div>
            <button>Sign Up</button>
            <div className="log">
                <p>if you already have an account </p>
                <Link to='/Login'><p>Sign in</p></Link>
            </div>
        </div>


    </div>
    
  );
}

export default SignUp;