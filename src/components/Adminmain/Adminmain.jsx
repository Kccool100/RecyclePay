import React, { useEffect, useState } from 'react';
import './Adminmain.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Adminmain = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const Token = useSelector((state) => state.Token);
  const [status, setStatus] = useState("");
console.log(status)
  const headers = {
    Authorization: `Bearer ${Token}`,
  };

  const url = "https://waste-project.onrender.com/api/v1/user";

  // Fetch all waste requests
  const adminaction = async () => {
    try {
      const res = await axios.get(`${url}/get-all`, { headers });
      setData(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error('API Error', error);
      setError(error.message);
    }
  };

  const handleAction = async (requestId) => {
    console.log(status)
    if (!status) {
      alert("Select a status");
    } else {
      try {
        const response = await axios.put(`${url}/pick-waste/${requestId}`,{ action:status }, {headers});
        console.log(response);
        // Optionally, update the state or dispatch an action here
      } catch (err) {
        console.error(err);
      }
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
          Total request: {data.reduce((total, request) => total + request.WasteKG, 0) || 0} Kg
        </div>
        <div className='mhead'>
          <header>Date</header>
          <header>WasteKg</header>
          <header style={{ marginRight: "50px" }}>Address</header>
          <header>Contact</header>
          <header>Status</header>
          <header>Action</header>
        </div>
        {data.map((request, index) => (
          <div className='mainholder' key={index}>
            <div className='mainid'>
              <div className='mainidtextt'>
                <p>{new Date(request.createdAt).toLocaleString()}</p>
              </div>
              <div className='mainidkg'>{request.WasteKG} Kg</div>
              <div className='mainidtext'>{request.pickUpAddress}</div>
              <div className='mainidtextt' style={{ marginRight: "20px" }}>{request.phoneNumber}</div>
              <div className='mainidpend'>
                <span>{request.status || "Pending"}</span>
              </div>
              <div className='mainidtextt'>
                <select onChange={(e) => setStatus(e.target.value)}>
                  <option value="">Action</option>
                  <option value="approved">Accept</option>
                  <option value="declined">Decline</option>
                </select>
                <button onClick={() => handleAction(request._id)}>Accept</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adminmain;
