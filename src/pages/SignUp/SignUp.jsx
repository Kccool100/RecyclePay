import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"
import {useForm} from "react-hook-form"
import { useContext} from "react"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Theme } from '../../components/Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider" 
import  axios from "axios";


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
    Name: yup.string().required("Please input your name"),
    Email: yup.string().email().required("Please input your Email"),
    Location: yup.string().required("Please input your Location"),
    PhoneNumber: yup.string().required("Please input your Phone Number"),
    Password:yup.string().required("Please input your Password and must be 6 characters").min(6),
  })
  .required()

  const baseURL = "https://waste-project.onrender.com";

const SignUp = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate()

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
    const res= await axios.post(
      `${baseURL}/api/v1/user/signUp`,
      data
    )
    console.log(res)
  setLoading(false)
  setTimeout(() => {
    navigate("/SignupConfirmation/:token")
  }, 2000);
   }catch(error){
    console.log(error)
   }finally{
    setLoading(false)
   }
    

  };

  return (
    <div className="SignUpCon" >
      <form  onSubmit={handleSubmit (onSubmit)} className="SigUpForm" style={styles.background}>
        <h2>Sign Up With RecyclePay</h2>
        <label>
          <input 
            placeholder='Name'
            type="text" 
            {...register("Name")}
            
            style={styles.background}
          />
           <p className="error">{errors.Name?.message}</p>
        </label>
        <label>
          <input 
            placeholder='Email'
            type="email" 
            {...register("Email")}
           
            style={styles.background}

          />
           <p className="error">{errors.Email?.message}</p>

        </label>
        <label>
          <input 
            placeholder='Password'
            type="password" 
            {...register("Password")}
            
            style={styles.background}

          />
           <p className="error">{errors.Password?.message}</p>

        </label>
        <label>
          <input 
            placeholder='Phone Number'
            type="text" 
            {...register("PhoneNumber")}
            style={styles.background}

          />
           <p className="error">{errors.PhoneNumber?.message}</p>

        </label>
        <label>
          <input 
            placeholder='Location'
            type="text" 
            {...register("Location")}
           
            style={styles.background}

          />
          
           <p className="error">{errors.Location?.message}</p>

        </label>
        <div className="radio">
        <input type="radio" required={true}/>
        <Link to="/Terms" style={{textDecoration:"none"}}>
              <p style={styles.text} className='terms'>I accept Terms and Conditions</p>
            </Link>
        </div>
          <div  className='buttonsign'>

           {Loading? (
            <p>Loading...</p>
           ): (<button type="submit" disabled={Loading}>Sign Up</button>)  }
            </div>
        <div className="logg">
                <h6 style={styles.text}>if you already have an account </h6>
                <Link to='/Login'  style={{textDecoration:"none", color:"#FF7043"}}><p style={styles.text} className='terms'>Sign in</p></Link>
            </div>
      </form>
    </div>
  );
};

export default SignUp;





    