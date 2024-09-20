import React from 'react';
import axios from 'axios';
import "./MakeAdminButton.css"
const MakeAdminButton = ({ userId }) => {



    const baseURL = "https://waste-project.onrender.com";
  
  const handleMakeAdmin = async () => {
    try {
      // API call to make the user an admin
      const response = await axios.put(
        `${baseURL}//api/v1/user/make-admin/${userId}`,

        {
            headers: {
              'Authorization': `Bearer${baseURL.getItem('token')}`, 
              'Content-Type': 'application/json', 
            },
          }
      );

      if (response.status === 200) {
        alert('User has been successfully made an admin');
      }
    } catch (error) {
      console.error('Error making user admin:', error);
      alert('Failed to make user admin');
    }
  };

  return (
    <button className='sidtext' onClick={handleMakeAdmin}>
      Make Admin
    </button>
  );
};

export default MakeAdminButton;
