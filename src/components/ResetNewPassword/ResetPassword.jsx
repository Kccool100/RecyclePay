import { Link } from "react-router-dom";
import "./ResetPassword.css"
import { useContext} from "react"
import { Theme } from '../Theme/Theme';
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
function ResetPassword() {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className='LoginCon'>
     <div className="LoginForm">
     <div className="SigUpForm" style={styles.background}>
        <h2 style={styles.text}>Reset Your Password?</h2>
        <label>
          <input
            placeholder='New Password'
            type="password"
            required
            style={styles.background}
          />
        </label>
        <label>
          <input
            placeholder='Confirm Password'
            type="password"
            required
            style={styles.background}
          />
        </label>
      <div className="mid">
      <Link to="/Rpassword" style={{ textDecoration: "none" }}>
          <button>Continue</button>
        </Link>
      </div>

      </div>
     </div>

    </div>

  );
}

export default ResetPassword;