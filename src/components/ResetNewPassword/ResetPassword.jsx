import { Link } from "react-router-dom";
import "./ResetPassword.css";
import { useContext, useState, useEffect } from "react";
import { Theme } from '../Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const getStyles = (mode) => ({
  background: {
    backgroundColor: Theme[mode].backgroundColor,
  },
  text: {
    color: Theme[mode].color,
  },
  theme: {
    color: Theme[mode].highlight,
  }
});

function ResetPassword() {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  const baseURL = "https://waste-project.onrender.com";
  const [Loading, setLoading] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(1);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { token } = useParams();

  // useEffect(() => {
  //   const verifyResetPassword = () => {
  //     setLoading(true);
  //     axios
  //       .post(`${baseURL}/api/v1/user/reset-password/${token}`)
  //       .then((res) => {
  //         console.log(res);
  //         setIsResetPassword(2);
  //       })
  //       .catch((err) => {
  //         console.log("Error response:", err);
  //         setIsResetPassword(3);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   };

  //   if (token) {
  //     verifyResetPassword();
  //   }
  // }, [token, baseURL, navigate]);

  const handlePasswordReset = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);

    axios
      .post(`${baseURL}/api/v1/user/reset-password/${token}`, {
        password: newPassword,
      })
      .then((res) => {
        console.log("Password updated:", res);
        alert('Password reset successful!');
        setTimeout(() => {
          navigate("/Login");
        }, 2000);
      })
      .catch((err) => {
        console.error("Password reset failed:", err);
        alert('Password reset failed!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='LoginCon'>
      <div className="LoginForm">
       
              <div className="SigUpForm" style={styles.background}>
                <h2 style={styles.text}>Reset Your Password</h2>
                <form onSubmit={handlePasswordReset}>
                  <label>
                    <input
                      placeholder='New Password'
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      style={styles.background}
                    />
                  </label>
                  <label>
                    <input
                      placeholder='Confirm Password'
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      style={styles.background}
                    />
                  </label>
                  <div className="mid">
                  {Loading ? (
        <ClipLoader color={"#ff7043"} loading={Loading} size={35} />
      ) : (
                      <button type="submit">Continue</button> 
                    )}
                  </div>
                </form>
              </div>
          
      </div>
    </div>
  );
}

export default ResetPassword;
