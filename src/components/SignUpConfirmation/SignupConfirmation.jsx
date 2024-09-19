import React from 'react'
import './SignupConfirmation.css'
import { useNavigate, useParams  } from 'react-router-dom'
import confirm from '../../assets/confirm.png'
import { useState } from 'react'
import axios from 'axios'



const SignupConfirmation = () => {
  const { token } = useParams();
  const [isVerified, setIsVerified] = useState(1);

  const baseURL = "https://waste-project.onrender.com";

  useEffect(() => {
    const verifyUser = () => {
      axios
        .get(`${baseURL}/api/v1/user/verify/${token}`)
        .then((res) => {
          console.log(res);
          setIsVerified(2);
        })
        .catch((err) => {
          console.log("Error response:", err);
          setIsVerified(3);
        });
    };
    verifyUser();
  }, []);

  console.log(token);
  const navigate = useNavigate();
  return (
    
    <div className='confirm-container'>
    <>  
      {isVerified === 1 ? (
          <h1>Verifying Email.....</h1>
        ) : isVerified === 2 ? (
        <>
        <div className='imagebox'>  
          <img src={confirm} alt="" />
        </div>
           <div className='confirmtext'>
           <span>
                <p>
                    Thank you,your email has been verified.
                    <br />
                    Your account is now active{" "}
                </p>
                </span>
           </div>
          </>
             ) : (
              <h1>Verification failed</h1>
            )}
            </>
    </div>
  )
}

export default SignupConfirmation
