import React, { useState } from 'react';
import Modal from 'react-modal';
import './Usermain.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/recycleLogo.png'

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
  const navigate = useNavigate();
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
    <div className='usermain-container'>
      <img src={logo} alt="" />
      <div className='usermainheaderbox'>
        <div className='headerbox1'>
          <div className='header2'>
            <h4>Total waste(Kg)</h4>
            <h2>40Kg</h2>
          </div>
        </div>
        <div className='headerbox1'>
          <div className='header2'>
            <h4>Total Accepted(Kg)</h4>
            <h2>30Kg</h2>
          </div>
        </div>
        <div className='headerbox1'>
          <div className='header2'>
            <h4>Pending request</h4>
            <h2>1</h2>
          </div>
        </div>
      </div>
      <div className='usermainbox'>
        <div className='waste'>
          <button className='nut1'>Waste history</button>
          <button onClick={() => navigate('/Pick')}>Pick Up</button>
        </div>
        <div className='usermainheader'>
          <h4>Transaction History</h4>
        </div>
        <div className='mainholder'>
          <div className='usermainid'>
            <header>ID</header>
            <div className='usermainidtext'>
              <p>1</p>
            </div>
          </div>
          <div className='usermainname'>
            <header>Name</header>
            <div className='usermainidtext'>
              <p>John Kate</p>
            </div>
          </div>
          <div className='usermainkg'>
            <header>Weight(Kg)</header>
            <div className='usermainidtext'>
              <p>10Kg</p>
            </div>
          </div>
          <div className='usermainstatus'>
            <header>Date & Time</header>
            <div className='usermainidtext'>
              <p>28, Aug & 3:30pm</p>
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