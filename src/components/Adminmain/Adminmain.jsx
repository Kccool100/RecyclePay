import React, { useEffect, useState } from 'react';
import './Adminmain.css';
import { useSelector } from 'react-redux';
import axios from 'axios'; // Ensure axios is imported
import { IoMdCloudyNight } from 'react-icons/io';

const Adminmain = () => {
  const [data, setData] = useState([]);
  console.log(data)
  const [error, setError] = useState(null);

  const Token = useSelector((state) => state.Token);
  const headers = {
    Authorization: `Bearer ${Token}`,
  };
  const url = "https://waste-project.onrender.com/api/v1/user";

  const adminaction = async () => {
    console.log("Start: ")
    try {
      const res = await axios.get(`${url}/get-all`, {headers});
      console.log("Data: ",res)
      setData(res.data);
    } catch (error) {
      console.error('API Error', error);
      setError(error.message);
    }
  };

  const handleActionChange = async (id, action) => {
    try {
      await axios.post(`${url}/update-request`, { id, action }); // Update your API endpoint accordingly
      adminaction(); // Refresh the data
    } catch (error) {
      console.error('Error updating request', error);
    }
  };

  useEffect(() => {
    adminaction();
  }, []);

  return (
    <div className='main-container'>
      <div className='mainbox'>
        <div className='mainheader'>
          <h2>Recent Application</h2>
          <p>Review and manage recent recycling orders as Admin.</p>
        </div>
      <div className='mhead'>
      <header>Date</header>
        <header>Name of User</header>
        <header>WasteKg</header>
        <header>Contact</header>
        <header>Status</header>
        <header>Action</header>
      </div>
        {data?.map((data, index) => (
          <div className='mainholder' key={index}>
            <div className='mainid'>
            
              <div className='mainidtext'>
              <p style={styles.text}>{new Date(data.createdAt).toLocaleString()}</p>
                 </div>
            </div>
            <div className='mainname'>
             
              <div className='mainidtext'>{data.userInfo?.Name}</div>
            </div>
            <div className='mainname'>
            
              <div className='mainidtext'>{data.WasteKG}Kg</div>
            </div>
            <div className='mainname'>
              
              <div className='mainidtext'>{data.phoneNumber}</div>
            </div>
            <div className='mainstatus'>
             
              <div className='mainidtext'><span>Pending</span></div>
            </div>
            <div className='mainaction'>

              <div className='mainidtext'>
                <select onChange={(e) => handleActionChange(item.id, e.target.value)}>
                  <option value="">Select Action</option>
                  <option value="accept">Accept</option>
                  <option value="decline">Decline</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adminmain;
