import React, { useState } from 'react';
import Modal from 'react-modal';
import './Usermain.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/recycleLogo.png'
import { useContext} from "react"
import { Theme } from '../Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider" 
import { useSelector } from 'react-redux';


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

// Modal custom styles
const customStyles = {
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // padding: '20px',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    height:''
  },
};

const Usermain = () => {

  const userInfo = useSelector((state)=>state.user.user)
  console.log(userInfo);
  
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);

  // Function to open modal
  function openModal() {
    setIsOpen(true);
  }

  // Function to close modal

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='usermain-container' >
      <img src={logo} alt="" />
 
      <div className='usermainbox' >
        <div className='waste'>
          <button className='nut1'>Waste history</button>
          <button onClick={() => navigate('/Pick')}>Pick Up</button>
        </div>
        <div className='usermainheader' >
          <h4 style={styles.text}>Transaction History</h4>
        </div>
        <div className='mainholder' >
          <div className='usermainid'>
            <header style={styles.text}>ID</header>
            <div className='usermainidtext' >
              <p style={styles.text}>1</p>
            </div>
          </div>
          <div className='usermainname' >
            <header style={styles.text}>Name</header>
            <div className='usermainidtext' >
              <p style={styles.text}>John Kate</p>
            </div>
          </div>
          <div className='usermainkg' >
            <header style={styles.text}>Weight(Kg)</header>
            <div className='usermainidtext' >
              <p style={styles.text}>10Kg</p>
            </div>
          </div>
          <div className='usermainstatus' >
            <header style={styles.text}>Date & Time</header>
            <div className='usermainidtext' >
              <p style={styles.text}>28, Aug & 3:30pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Button to open the modal */}
      <div className='ft' onClick={openModal}>
        <p>Log Out</p>
      </div>

      {/* Modal implementation */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal} // Ensures modal can be closed via overlay or ESC
        style={customStyles}
      >
        <h2>Are you sure you want to log out?</h2>
        <div className='modebutton'>
          <button onClick={() => navigate('/')}>Yes</button>
          <button onClick={closeModal}>No</button>
        </div>
      </Modal>
    </div>
  );
};

export default Usermain