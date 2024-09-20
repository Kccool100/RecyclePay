import React from 'react'
import './Pickupconfirmed.css'
import svg from "../../assets/svg.png"
import logo from '../../assets/recycleLogo.png'



import { useNavigate, useParams  } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



const Pickupconfirmed = () => {
  const { token } = useParams();
  const [isVerified, setIsVerified] = useState(1);

  const baseURL = "https://waste-project.onrender.com";
  const navigate = useNavigate();

  useEffect(() => {
    
    const verifyUser = () => {
      axios
        .post(`${baseURL}/api/v1/user/update-waste`)
        .then((res) => {
          console.log(res);
          setIsVerified(2);
          setTimeout(() => {
            navigate("/Userdashboard")
          }, 3000);
        })
        .catch((err) => {
          console.log("Error response:", err);
          setIsVerified(3);
        });
    };
    verifyUser();
  }, []);

  return (
    <div className='confirmed'>
        <div className='confirmedblur'>  
          <div className='confirmedbox'>
            <div className='confirmedheader'>
              <div className="iconn">
                {/* <FaAngleLeft onClick={()=> navigate("/")} /> */}
              </div>
              
               <div className="logoImg">
               <img src={logo} alt="" onClick={()=> navigate("/Userdashboard")} style={{cursor:"pointer"}}  />
               </div>
            </div>
           
            <div className='thankyou'>
                <h1> Thank You </h1>
                <h2> Your Request Has Been Confirmed</h2>
                <div className="svg">
                  <img src={svg} alt="svg" />
                </div>  
            </div>
          </div>
           </div>
      




    </div>
  )
}

export default Pickupconfirmed
