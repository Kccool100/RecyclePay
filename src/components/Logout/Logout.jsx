import React from 'react'
import logout from '../../assets/logout.png'
import axios from 'axios';
import "./Logout.css"
import { useNavigate } from 'react-router-dom'

const baseURL = "https://waste-project.onrender.com";

const Logout = () => {
    const navigate = useNavigate();


    const handleLogout = async (data) => {
        try {
          // API call to logout the user
          const res = await axios.post(
            `${baseURL}//api/v1/user/log-out`,
            data
          );
    console.log(res)

    
          if (response.status === 200) {
            localStorage.removeItem('token');
            navigate('/');
          }
        } catch (error) {
          console.error('Error during logout', error);
        }
      };
  return (
    <button className='logout' onClick={handleLogout}>
       Logout <img src={logout} alt='logout'/>
     </button>
  )
}

export default Logout
