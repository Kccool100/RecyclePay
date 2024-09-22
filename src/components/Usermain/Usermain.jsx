import React, { useEffect, useState, useContext } from 'react';
import Modal from 'react-modal';
import './Usermain.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/recycleLogo.png';
import { ThemeContext } from "../../context/ThemeProvider"; 
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Theme } from '../Theme/Theme';
import { setUpdateWaste } from '../../Global/Slice'; // Adjust based on your actual Redux slice

const getStyles = (mode) => ({
  background: {
    backgroundColor: Theme[mode].backgroundColor,
  },
  text: {
    color: Theme[mode].color,
  },
});

// Modal custom styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    padding: '30px',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Usermain = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  const Token = useSelector((state) => state.Token);
  const headers = { Authorization: `Bearer ${Token}` };
  const URL = `https://waste-project.onrender.com`;
  const dispatch = useDispatch();
  const wasteData = useSelector((state) => state.WasteData) 
 // Default to empty array if null

  const getAllWaste = async () => {
    try {
      const res = await axios.get(`${URL}/api/v1/user/waste-records`, { headers });
      dispatch(setUpdateWaste(res.data.data)); // Update the Redux store with fetched data
      alert(res.message || 'Waste History Retrieved');
    } catch (error) {
      console.error('API Error:', error);
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    getAllWaste();
  }, []);

  
  // Calculating totals
  // const totalWaste = wasteData.reduce((total, item) => total + item.WasteKG, 0);
  // const totalAccepted = wasteData.filter(item => item.status === 'accepted').reduce((total, item) => total + item.WasteKG, 0);
  // const pendingRequests = wasteData.filter(item => item.status === 'pending').length;

  return (
    <div className='usermain-container'>
      <img src={logo} alt="Logo" onClick={() => navigate('/')} />
      <div className='usermainheaderbox'>
        <div className='headerbox1'>
          <div className='header2'>
            <h4>Total waste</h4>
            <h2> Kg</h2>
          </div>
        </div>
        <div className='headerbox1'>
          <div className='header2'>
            <h4>Total Accepted </h4>
            <h2>Kg</h2>
          </div>
        </div>
        <div className='headerbox1'>
          <div className='header2'>
            <h4>Pending Requests</h4>
            <h2> 0</h2>
          </div>
        </div>
      </div>
      <div className='waste'>
        <button className='nut1'>Waste History</button>
        <button onClick={() => navigate('/Pick')}>Pick Up</button>
      </div>
      <div className='usermainbox'>
        <div className='usermainheader'>
<<<<<<< HEAD
          <h4 style={styles.text}>Waste History</h4>
=======
          <h4 style={styles.text}>Transaction History</h4>
        </div>
        <div className='usermainid'>
          <header style={styles.text} >Weight(Kg)</header>
          <header style={styles.text} >Contact</header>
          <header style={styles.text}>Address</header>
          <header style={styles.text}>Date & Time</header>
        </div>

        <div>
         
          { data.length > 0 ? (
            data?.map((data, index) => (
              <div className='mainholder' key={index}>
                <div className='usermainname'>
                  <p style={styles.text}>{data.WasteKG} kg</p>
                </div>
                <div className='usermainname'>
                  <p style={styles.text}>{data.phoneNumber}</p>
                </div>
                <div className='usermainkg'>
                  <p style={styles.text}>{data.pickUpAddress}</p>
                </div>
                <div className='usermainstatus'>
                  <p style={styles.text}>{new Date(data.createdAt).toLocaleString()}</p>
                </div>
              </div>
             ))
          ) :(
            <p> No History available</p>
          )
          }
         
>>>>>>> 3ff58a098a5b28fce0368d45040da8bcc12eec9c
        </div>
        <table className='usermain-table'>
          <thead>
            <tr>
              <th style={styles.text}>Weight (Kg)</th>
              <th style={styles.text}>Contact</th>
              <th style={styles.text}>Address</th>
              <th style={styles.text}>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {wasteData.length > 0 ? (
              wasteData.map((item, index) => (
                <tr key={item._id}>
                  <td style={styles.text}>{item.WasteKG} kg</td>
                  <td style={styles.text}>{item.phoneNumber}</td>
                  <td style={styles.text}>{item.pickUpAddress}</td>
                  <td style={styles.text}>{new Date(item.createdAt).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={styles.text}>No History Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className='ft' onClick={() => setIsOpen(true)}>
        <p>Log Out</p>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
        <div className='modalbox'>
          <h2>Are you sure you want to log out?</h2>
          <div className='modebutton'>
            <button onClick={() => navigate('/Login')}>Yes</button>
            <button onClick={() => setIsOpen(false)}>No</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Usermain;
