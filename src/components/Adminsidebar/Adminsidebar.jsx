import React, { useContext, useState } from 'react'
import './Adminsidebar.css'
import logo from '../../assets/recycleLogo.png'
import MakeAdminButton from '../MakeAdmin/MakeAdminButton'
import { ThemeContext } from '../../context/ThemeProvider';
import { Theme } from '../Theme/Theme';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Logout from '../Logout/Logout';

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
    top: '50%',
    left: '50%',
    right: 'auto',
    padding: '30px',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Adminsidebar = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = useState(false);

  // Function to open modal
  function openModal() {
    setIsOpen(true);
  }

  // Function to close modal

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='side-container'>
      <div className='sidetext'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='sidtext'>
                <h6>Application </h6>
            </div>
            <div className='sidtext'>
                 Total request : 0
            </div>
         
         </div>
         <footer onClick={openModal} > <Logout/> </footer>  
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal} // Ensures modal can be closed via overlay or ESC
        style={customStyles}
      >
        <h2>Are you sure you want to log out?</h2>
        <div className='modebutton'>
          <button onClick={() => navigate('/Login')}>Yes</button>
          <button onClick={closeModal}>No</button>
        </div>
      </Modal>   
    </div>
  )
}

export default Adminsidebar
