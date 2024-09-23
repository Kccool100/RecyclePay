import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Theme } from "../../components/Theme/Theme";
import { ThemeContext } from "../../context/ThemeProvider";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

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

const schema = yup
  .object({
    Name: yup.string().required("Please input your name"),
    Email: yup.string().email().required("Please input your Email"),
    Location: yup.string().required("Please input your Location"),
    PhoneNumber: yup.string().required("Please input your Phone Number"),
    Password: yup
      .string()
      .required("Please input your Password and must be 6 characters")
      .min(6),
      // acceptTerms: yup.boolean()
      // .oneOf([true], 'You must accept the terms and conditions') // Ensure the checkbox is checked
      // .required('You must accept the terms and conditions'),
  })
  .required();

const baseURL = "https://waste-project.onrender.com";

const SignUp = () => {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const [tick, setTick] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const ToastloadingId = toast.loading("Please wait....");
    try {
      const res = await axios.post(`${baseURL}/api/v1/user/signUp`, data);
      console.log(res.data);

      toast.success(
        res.data.message ||
          "Signup Successful! Check your mail for verification.",
        {
          duration: 4000,
        }
      );

      setLoading(false);
      setTimeout(() => {
        navigate("/Confirmation");
      }, 2000);
    } catch (error) {
      console.log(error.response);
      toast.error(error.response?.data?.message || "Network Error", {
        duration: 4000,
      });
    } finally {
      toast.dismiss(ToastloadingId);
      setLoading(false);
    }
  };

  return (
    <div className="SignUpCon">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="SigUpForm"
        style={styles.background}
      >
        <h2>Sign Up With RecyclePay</h2>
        <label>
          <input
            placeholder="Name"
            type="text"
            {...register("Name")}
            style={styles.background}
          />
          <p className="error">{errors.Name?.message}</p>
        </label>
        <label>
          <input
            placeholder="Email"
            type="email"
            {...register("Email")}
            style={styles.background}
          />
          <p className="error">{errors.Email?.message}</p>
        </label>
        <label>
          <input
            placeholder="Password"
            type="password"
            {...register("Password")}
            style={styles.background}
          />
          <p className="error">{errors.Password?.message}</p>
        </label>
        <label>
          <input
            placeholder="Phone Number"
            type="text"
            {...register("PhoneNumber")}
            style={styles.background}
          />
          <p className="error">{errors.PhoneNumber?.message}</p>
        </label>
        <label>
          <input
            placeholder="Location"
            type="text"
            {...register("Location")}
            style={styles.background}
          />

          <p className="error">{errors.Location?.message}</p>
        </label>
        <div className="radio">
          {/* <input type="radio" {...register("acceptTerms")}/> */}
          {/* <p className="error">{errors.acceptTerms?.message}</p> */}
          {/* <Link to="/Terms" style={{ textDecoration: "none" }}>
            <p style={styles.text} className="terms">
              I accept Terms and Conditions
            </p>
          </Link> */}
        </div>
        <div className="buttonsign">
        {Loading ? (
        <ClipLoader color={"#ff7043"} loading={Loading} size={35} />
      ) : (
            <button type="submit" disabled={Loading}>
              Sign Up
            </button>
          )}
        </div>
        <div className="logg">
          <h6 style={styles.text}>if you already have an account </h6>
          <Link
            to="/Login"
            style={{ textDecoration: "none", color: "#FF7043" }}
          >
            <p style={styles.text} className="terms">
              Sign in
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
