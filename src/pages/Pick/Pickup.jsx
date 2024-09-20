import React from 'react'
import './Pickup.css'
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext, useState} from "react"
import { Theme } from '../../components/Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider" 
import  axios from "axios";
import { useNavigate } from 'react-router-dom'


const getStyles = (mode) =>({
  background: {
      backgroundColor: Theme[mode].backgroundColor,
     
  },
  text:{
      color:Theme[mode].color
  },
  theme: {
      color:Theme[mode].highlight

  }
});



const schema = yup
  .object({
    pickUpAddress: yup.string().required("Please input your Pick up Address"),
    WasteKG: yup.number().required("Please select your Waste KG")
  })
  .required()

  const Id = localStorage.getItem("id")
  console.log(Id);

  const baseURL = `https://waste-project.onrender.com/api/v1/user/create-waste/${Id}`;

// const navigate = useNavigate()
  

const Pickup = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  const [Loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async(data) => {
    setLoading(true)
   try{
    const response = await axios.post(baseURL,data)
    console.log(response.data);
    // navigate("/Pickupconfirmed")
   }catch(error){
    console.log(error);
    
   }finally{
    setLoading(false)
   }

  };

  return (
           <div className="pick-container">
            <div className="pickblur">
            <form onSubmit={handleSubmit (onSubmit)} className="SigUpForm" style={styles.background}>
      <h2>Pick Up Details</h2>
   
      
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
   
       <div  className='pickbutton'>  

         {Loading? (
            <p>Loading...</p>
           ): (<button type="submit" disabled={Loading}>Next</button>)  }
        
        </div>
     
    </form>
            </div>
   
  </div>
);
};

export default Pickup;
