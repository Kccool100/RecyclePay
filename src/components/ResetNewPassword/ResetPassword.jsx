import { Link } from "react-router-dom";
import "./ResetPassword.css"
import { useContext} from "react"
import { Theme } from '../Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider" 
import { useNavigate, useParams  } from 'react-router-dom'
import confirm from '../../assets/confirm.png'
import { useState, useEffect } from 'react'
import axios from 'axios'


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
  const baseURL = "https://waste-project.onrender.com";
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isResetPassword, setisResetPassword] = useState(1);


  useEffect(() => {
    
    const verifyResetPassword = () => {
      axios
        .get(`${baseURL}/api/v1/user/reset-password/${token}`)
        .then((res) => {
          console.log(res);
          setisResetPassword(2);
          setTimeout(() => {
            navigate("/Rpassword")
          }, 3000);
        })
        .catch((err) => {
          console.log("Error response:", err);
          setisResetPassword(3);
        });
    };
    verifyResetPassword();
  }, []);

  setLoading(false)


  return (
    <div className='LoginCon'>
     <div className="LoginForm">
     <>  
      {isResetPassword === 1 ? (
          <h1>Verifying Email.....</h1>
        ) : isResetPassword === 2 ? (
        <>
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
      
      {Loading? (
            <p>Loading...</p>
           ): (<button type="submit">Continue</button>)  }

      </div>

      </div>
      </>
             ) : (
              <h1>Reset Password failed</h1>
            )}
            </>

     </div>

    </div>

  );
}

export default ResetPassword;