import "./Login.css"
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

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
    Email: yup.string().email().required("Please input your Email"),
    Password:yup.string().required("Please input your Password and must be 6 characters").min(6),
  })
  .required()

  const baseURL = "https://waste-project.onrender.com";

const Login = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  
  const onSubmit = async(data) => {
    setLoading(true)
    const res= await axios.post(
      `${baseURL}/api/v1/user/sign-in`,
      data
    )
    console.log(res)
  setLoading(false)
  setTimeout(() => {
    navigate("/Userdashboard")
  }, 3000);

  };

return (
  <div className="loginCon">
    <form onSubmit={handleSubmit (onSubmit)} className="SigUpForm"  style={styles.background}>
      <h2>Sign In With RecyclePay</h2>
   
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
 
   
        <div  className="buttonin">


        {Loading? (
            <p>Loading...</p>
           ): (<button type="submit">Sign In</button>)  }

        </div>

          <div className="logg">
              <Link to='/forgetpassword'  style={{textDecoration:"none"}}><p style={styles.text}>Forgot password ?</p></Link>
          </div>

    </form>
  </div>
);
};

export default Login;





















