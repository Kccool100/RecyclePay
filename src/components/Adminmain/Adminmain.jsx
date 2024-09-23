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
      setData(res.data.data);
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
        <div className='sidtext'>
                 Total request : {data.reduce((total, request) => total + request.WasteKG, 0) || 0} 
                 Kg
        </div>
       <div className='mhead'>
      <header >Date</header>
        <header>WasteKg</header>
        <header style={{marginRight:"50px"}}> Address</header>
        <header> Contact</header>
        <header>Status</header>
        <header>Action</header>
      </div>
        {data.map((data, index) => (
          <div className='mainholder' key={index}>
            <div className='mainid'>
              <div className='mainidtextt'>
              <p>{new Date(data.createdAt).toLocaleString()}</p>
                 </div>
              {/* <div className='mainidtextt'>{data.userInfo?.Name}</div> */}
              <div className='mainidkg'>{data.WasteKG}Kg</div>
              <div className='mainidtext'>{data.pickUpAddress}</div>
              <div className='mainidtextt' style={{marginRight:"20px"}}>{data.phoneNumber}</div>
              <div className='mainidpend'><span>Pending</span></div>
              <div className='mainidtextt'>
                <select onChange={(e) => handleActionChange(item.id, e.target.value)} style={{backgroundColor:"#ff7043", color:"#ffff", height:"35px" , width:"120px", fontSize:"14px", border:"none",outlineColor:"none"}}>
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
