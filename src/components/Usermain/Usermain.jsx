import React, { useEffect, useState, useContext } from 'react';
import Modal from 'react-modal';
import './Usermain.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/recycleLogo.png';
import { ThemeContext } from "../../context/ThemeProvider"; 
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Theme } from '../Theme/Theme';

const getStyles = (mode) => ({
  background: {
    backgroundColor: Theme[mode].backgroundColor,
  },
  text: {
    color: Theme[mode].color,
  },
  theme: {
    color: Theme[mode].highlight,
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
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // console.log(data)
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const Token = useSelector((state) => state.Token);
  const headers = {
    Authorization: `Bearer ${Token}`,
  };

  const URL = `https://waste-project.onrender.com`;

  const getAllWaste = async () => {
    try {
      const res = await axios.get(`${URL}/api/v1/user/waste-records`, {headers}); // Adjust this URL based on your API
      console.log(res);
      setData(res?.data?.data); // Make sure this corresponds to the structure of your API response
      alert(res.message || 'Waste History Retrieved')
    } catch (error) {
      console.error('API Error:', error);
      setError(error.message || 'Something went wrong');
      alert(error.response?.data?.message || 'Something went wrong')
    }
  };

  useEffect(() => {
    getAllWaste();
  }, []);

  return ( 
    <div className='usermain-container'>
      <img src={logo} alt="Logo" onClick={()=> navigate('/')}/>
      <div className='usermainheaderbox'>
        {/* Display header information dynamically */}
        <div className='headerbox1'>
          <div className='header2'>
            <h4>Total waste(Kg)</h4>
            <h2>
               {data.reduce((total, request) => total + request.WasteKG, 0) || 0} 
               Kg</h2>
          </div>
        </div>
        <div className='headerbox1'>
          <div className='header2'>
            <h4>Total Accepted(Kg)</h4>
            <h2>
               {data.filter(item => item.status === 'accepted').reduce((total, request) => total + request.WasteKg, 0) || 0}  
              Kg</h2>
          </div>
        </div>
        <div className='headerbox1'>
          <div className='header2'>
            <h4>Pending requests</h4>
            <h2>
               {data.filter(item => item.status === 'pending').length || 0}
              
            </h2>
          </div>
        </div>
      </div>
      <div className='waste'>
        <button className='nut1'>Waste history</button>
        <button onClick={() => navigate('/Pick')}>Pick Up</button>
      </div>
      <div className='usermainbox'>
        <div className='usermainheader'>
          <h4 style={styles.text}>Transaction History</h4>
        </div>
        <div className='usermainid'>
          <header style={styles.text} className='headname'>Weight(Kg)</header>
          <header style={styles.text} className='headname'>Contact</header>
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
         
        </div>
      </div>

      <div className='ft' onClick={openModal}>
        <p>Log Out</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
       <div className='modalbox'>
       <h2>Are you sure you want to log out?</h2>
        <div className='modebutton'>
          <button onClick={() => navigate('/Login')}>Yes</button>
          <button onClick={closeModal}>No</button>
        </div>
       </div>
      </Modal>
    </div>
  );
};

export default Usermain;
