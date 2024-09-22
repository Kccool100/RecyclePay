import React, { useState } from 'react'
import Modal from 'react-modal';
import './Usersidebar.css'
import userlogo from '../../assets/recycleLogo.png'
import { useNavigate } from 'react-router-dom'
import logout from '../../assets/logout.png'
import { useContext} from "react"
import { Theme } from '../Theme/Theme';
import Logout from '../Logout/Logout';
import { ThemeContext } from "../../context/ThemeProvider" 


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

const Usersidebar = () => {
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
    <div className='userside-container' >
      <div className='usersidetext'>
        <div className='userlogo'>
            <img src={userlogo} alt="" />
        </div>
        <div className='usersidext'>
             <h6> Waste history </h6>
        </div>
        <div className='usersidtext' onClick={()=> navigate("/Pick")}>
             <h6> Pick Up</h6>
        </div>
         
         </div>
      <footer onClick={openModal} ><Logout/></footer>  
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

export default Usersidebar