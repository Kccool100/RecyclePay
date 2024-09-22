import "./Login.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Theme } from "../../components/Theme/Theme";
import { ThemeContext } from "../../context/ThemeProvider";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUsers } from "../../Global/Slice";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const getStyles = (mode) => ({
  background: {
    backgroundColor: Theme[mode].backgroundColor,
  },
  text: {
    color: Theme[mode].color,
  },
});

const schema = yup
  .object({
    Email: yup.string().email().required("Please input your Email"),
    Password: yup.string().required("Please input your Password").min(6),
  })
  .required();

const baseURL = "https://waste-project.onrender.com";

const Login = () => {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const ToastloadingId = toast.loading("Please wait...");
    try {
      const res = await axios.post(`${baseURL}/api/v1/user/sign-in`, data);
      toast.success(res?.data?.message || `Welcome back ${data.Name}`, {
        duration: 4000,
      });

      localStorage.setItem("id", res.data.data._id);
      dispatch(setUsers(res.data.data));
      dispatch(setToken(res.data.Token));

      const role = res.data.data.isAdmin;
      if (role === true) {
        navigate("/Admindashboard");
      } else {
        navigate("/Userdashboard");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch data. Please try again later.",
        {
          duration: 4000,
        }
      );
    } finally {
      setLoading(false);
      toast.dismiss(ToastloadingId);
    }
  };

  return (
    <div className="loginCon">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="SigUpForm"
        style={styles.background}
      >
        <h2>Sign In With RecyclePay</h2>
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

        <div className="buttonin">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <button type="submit" disabled={loading}>
              Sign In
            </button>
          )}
        </div>

        <div className="logg">
          <Link to="/forgetpassword" style={{ textDecoration: "none" }}>
            <p style={styles.text}>Forgot password?</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
