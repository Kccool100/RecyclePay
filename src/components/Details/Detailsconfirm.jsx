import React, { useContext, useState } from 'react';
import './Detailsconfirm.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeProvider';
import { Theme } from '../Theme/Theme';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUpdateWaste } from '../../Global/Slice';
import toast from 'react-hot-toast';

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

  const getAllWaste = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/v1/user/get-all-waste`, { headers });
      console.log(res.data);
      // You might want to dispatch the data to your Redux store or handle it as needed
    } catch (error) {
      console.error('Error fetching waste data:', error);
    }
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      const data = {
        WasteKG: kg,
        pickUpAddress,
        phoneNumber,
      };
      


      const res = await axios.post(`${baseURL}/api/v1/user/create-waste`, data, { headers });
      
      dispatch(setUpdateWaste(res.data.data))
      console.log(res.data);
      // alert(res.data.message);
      toast.success(
        res.data.message || 
        "Waste created successfully",
        {
          duration :4000,
        }
      );
      await getAllWaste();

      // Navigate to a confirmation page or similar
      navigate('/Pickupconfirmed');
    } catch (error) {
      console.error(error);
      // alert(error.message);
      toast.error(
        error.message ||
        "Network connection interrupted",
        {
          duration :4000,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mainCon">
<div className='pconfirm' >
  <div className='pconfirm-box' style={styles.background}>
      <div className='pconfirmhead'>
        <h1>Confirm Info</h1>
      </div>

      <div className='confirmdetails'>
        <table className='confirm-table'>
          <tbody>
            <tr>
              <td className='ptext'>
                <h3 style={styles.text}>Address:</h3>
              </td>
              <td className='infotext'>
                <h3 style={styles.text}>{pickUpAddress}</h3>
              </td>
            </tr>
            <tr>
              <td className='ptext'>
                <h3 style={styles.text}>Phone Number:</h3>
              </td>
              <td className='infotext'>
                <h3 style={styles.text}>{phoneNumber}</h3>
              </td>
            </tr>
            <tr>
              <td className='ptext'>
                <h3 style={styles.text}>Waste Kg:</h3>
              </td>
              <td className='infotext'>
                <h3 style={styles.text}>{kg} Kg</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='reconfirm'>
        <p style={styles.text}>We Will Be At The Stated Address In The Next 3 Working Days</p>
        <p style={styles.text}>After Your Request Has Been Confirmed</p>
      </div>
    <div className="butnn">
    <button onClick={handleConfirm} disabled={Loading}>
        {Loading ? 'Confirming...' : 'Confirm'}
      </button>
      
      <button onClick={() => navigate("/Pick")}>Go Back</button>
    </div>
      
  </div>
</div>
    </div>
    

  );
};

export default Detailsconfirm;
