import React, { useEffect, useState, useContext } from "react";
import Modal from "react-modal";
import "./Usermain.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/recycleLogo.png";
import { ThemeContext } from "../../context/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Theme } from "../Theme/Theme";
import { setUpdateWaste } from "../../Global/Slice";

const getStyles = (mode) => ({
  background: {
    backgroundColor: Theme[mode].backgroundColor,
  },
  text: {
    color: Theme[mode].color,
  },
});

// Modal custom styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    padding: "30px",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Usermain = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  const Token = useSelector((state) => state.Token);
  const headers = { Authorization: `Bearer ${Token}` };
  const URL = `https://waste-project.onrender.com`;
  const dispatch = useDispatch();
  const wasteData = useSelector((state) => state.WasteData);

  // Fetch all waste data
  const getAllWaste = async () => {
    try {
      const res = await axios.get(`${URL}/api/v1/user/waste-records`, {
        headers,
      });
      dispatch(setUpdateWaste(res.data.data)); // Update Redux store with fetched data
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    getAllWaste();
  }, []);

  // Dynamic style for the status text
  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return { color: "green", fontWeight: "bold" };
      case "Failed":
        return { color: "red", fontWeight: "bold" };
      case "Pending":
      default:
        return { color: "orangered", fontWeight: "bold" };
    }
  };

  return (
    <div className="usermain-container">
      <img src={logo} alt="Logo" onClick={() => navigate("/")} />
      <div className="usermainheaderbox">
        <div className="headerbox1">
          <div className="header2">
            <h4>Total waste</h4>
            <h2> Kg</h2>
          </div>
        </div>
        <div className="headerbox1">
          <div className="header2">
            <h4>Total Accepted </h4>
            <h2>Kg</h2>
          </div>
        </div>
        <div className="headerbox1">
          <div className="header2">
            <h4>Pending Requests</h4>
            <h2> 0</h2>
          </div>
        </div>
      </div>
      <div className="waste">
        <button className="nut1">Waste History</button>
        <button onClick={() => navigate("/Pick")} className="nut2">
          Pick Up
        </button>
      </div>
      <div className="usermainbox">
        <div className="usermainheader">
          <h4 style={styles.text}>Waste History</h4>
        </div>
        <div className="usermainid">
          <header style={styles.text}>Weight(Kg)</header>
          <header style={styles.text}>Contact</header>
          <header style={styles.text}>Address</header>
          <header style={styles.text}>Date & Time</header>
          <header style={styles.text}>Status</header> {/* New Status Header */}
        </div>

        <table className="usermain-table">
          <tbody>
            {wasteData.length > 0 ? (
              wasteData.map((item) => (
                <tr key={item._id}>
                  <td style={styles.text}>{item.WasteKG} kg</td>
                  <td style={styles.text}>{item.phoneNumber}</td>
                  <td style={styles.text}>{item.pickUpAddress}</td>
                  <td style={styles.text}>
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                  <td style={getStatusStyle(item.status || "Pending")}>
                    {" "}
                    {/* Dynamic style */}
                    {item.status || "Pending"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={styles.text}>
                  No History Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="ft" onClick={() => setIsOpen(true)}>
        <p>Log Out</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className="modalbox">
          <h2>Are you sure you want to log out?</h2>
          <div className="modebutton">
            <button onClick={() => navigate("/Login")}>Yes</button>
            <button onClick={() => setIsOpen(false)}>No</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Usermain;
