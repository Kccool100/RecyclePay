import React, { useState, useContext } from 'react';
import FP from "../../assets/forgot.png";
import "./ForgetPassword.css";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Theme } from '../../components/Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider";

const getStyles = (mode) => ({
  background: {
    backgroundColor: Theme[mode].backgroundColor,
  },
  text: {
    color: Theme[mode].color,
  },
  theme: {
    color: Theme[mode].highlight,
  }
});

const schema = yup.object({
  Email: yup.string().email("Invalid email").required("Please input your Email"),
}).required();

const ForgetPassword = () => {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  const [Loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  const baseURL = "https://waste-project.onrender.com";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/api/v1/user/forgot-password`, data);
      console.log(res);
      const token = res.data.token; // Assuming token is returned in the response

      // setTimeout(() => {
      //   navigate(`/ResetPassword/:token`);
      // }, 3000);

    } catch (error) {
      console.error("Error sending reset password request", error);
      alert("Failed to send reset password email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='ForgetContainer'>
      <form onSubmit={handleSubmit(onSubmit)} className="SigUpForm" style={styles.background}>
        <h2 style={styles.text}>Oops, Forgot your password?</h2>
        <div className="illus">
          <img src={FP} alt="Forgot Password Illustration" />
        </div>
        <label>
          <input
            placeholder='Email'
            type="email"
            {...register("Email")}
            style={styles.background}
          />
          <p className="error">{errors.Email?.message}</p>
        </label>
        <div className='forgetbutton'>
          {Loading ? (
            <p>Loading...</p>
          ) : (
            <button type="submit">Continue</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
