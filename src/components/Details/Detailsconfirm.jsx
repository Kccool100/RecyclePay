import React, { useContext, useState } from 'react';
import './Detailsconfirm.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeProvider';
import { Theme } from '../Theme/Theme';
import { useDispatch, useSelector } from 'react-redux';
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
  },
});

const Detailsconfirm = () => {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the pickup info from the location state
  const location = useLocation();
  const { kg, phoneNumber, pickUpAddress } = location.state || {};

  const Token = useSelector((state) => state.Token);
  const headers = {
    Authorization: `Bearer ${Token}`,
  };

  const baseURL = `https://waste-project.onrender.com`;

  const handleConfirm = async () => {
    setLoading(true);
    try {
      const data = {
        WasteKG: kg,
        pickUpAddress,
        phoneNumber,
      };

      const res = await axios.post(`${baseURL}/api/v1/user/create-waste`, data, { headers });
      console.log(res.data);
      // alert(res.data); // Assuming the API returns a message field

      // Navigate to a confirmation page or similar
      navigate('/Pickupconfirmed');
    } catch (error) {
      console.error(error.response.data.message);
      alert(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='pconfirm'>
      <div className='pconfirm-box'>
        <div className='Confirm'>
          <div className='pconfirmhead'>
            <h1>Confirm Info</h1>
          </div>
          <div className='confirmdetails'>
            <div className='inp'>
              <div className='ptext'>
                <h3>Address:</h3>
              </div>
              <div className='infotext'>
                <h3>{pickUpAddress}</h3>
              </div>
            </div>
            <div className='inp'>
              <div className='ptext'>
                <h3>Phone Number:</h3>
              </div>
              <div className='infotext'>
                <h3>{phoneNumber}</h3>
              </div>
            </div>
            <div className='inp'>
              <div className='ptext'>
                <h3>Waste Kg:</h3>
              </div>
              <div className='infotext'>
                <h3>{kg} Kg</h3>
              </div>
            </div>
          </div>
          <div className='reconfirm'>
            <h2>We Will Be At The Stated Address In The Next 3 Working Days</h2>
            <h2>After Your Request Has Been Confirmed</h2>
          </div>
          <button onClick={handleConfirm} disabled={Loading}>
            {Loading ? 'Confirming...' : 'Confirm'}
          </button>
          
            <button onClick={()=>navigate("/Pick")}>Go Back</button>
          
        </div>
      </div>
    </div>
  );
};

export default Detailsconfirm;
