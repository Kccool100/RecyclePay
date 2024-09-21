import React, { useContext, useState } from 'react';
import './Pickup.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Theme } from '../../components/Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider"; 
import { useNavigate } from 'react-router-dom';

const getStyles = (mode) => ({
  background: {
    backgroundColor: Theme[mode].backgroundColor,
  },
  text: {
    color: Theme[mode].color
  },
  theme: {
    color: Theme[mode].highlight
  }
});

const schema = yup
  .object({
    pickUpAddress: yup.string().required("Please input your Pick up Address"),
    WasteKG: yup.number().min(10, "Minimum 10 KG required").required("Please select your Waste KG"),
    phoneNumber: yup.string().min(11, 'MInimum of 11 digits required').required("Please input your Phine Number")
  })
  .required();

const Pickup = () => {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      // Navigate to the confirmation page with collected data
      navigate("/Detailsconfirm", { state: { 
        kg: data.WasteKG, 
        phoneNumber: data.phoneNumber, 
        pickUpAddress: data.pickUpAddress 
      }});
      setLoading(false);
    }, 3000); // Simulated delay
  };

  return (
    <div className="pick-container">
      <div className="pickblur">
        <form onSubmit={handleSubmit(onSubmit)} className="SigUpForm" style={styles.background}>
          <h2>Pick Up Details</h2>
          
          <label>
            <input 
              placeholder='Phone Number'
              type="text" 
              {...register("phoneNumber")}
              style={styles.background}
            />
            <p className="error">{errors.phoneNumber?.message}</p>
          </label>

          <label>
            <input 
              placeholder='Pick Up Address'
              type="text" 
              {...register("pickUpAddress")}
              style={styles.background}
            />
            <p className="error">{errors.pickUpAddress?.message}</p>
          </label>
          
          <label>
            <input 
              placeholder='Waste KG'
              type="number" 
              {...register("WasteKG")}
              style={styles.background}
            />
            <p className="error">{errors.WasteKG?.message}</p>
          </label>
   
          <div className='pickbutton'>  
            {Loading ? (
              <p>Loading...</p>
            ) : (
              <button type="submit" disabled={Loading}>Next</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pickup;
