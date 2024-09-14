import React from 'react'
import './Adminmain.css'



const Adminmain = () => {
  return (
    <div className='main-container'>
          <div className='mainbox'>
            <div className='mainheader'>
                <h4> Recent Application</h4>
                <p>Review and manage recent recycling application</p>
            </div>
            <div className='mainholder'>
              <div className='mainid'>
                <header>
                  ID
                </header>
                <div className='mainidtext'>
                  1
                </div>
              </div>
              <div className='mainname'>
                <header>
                  Name
                </header>
                <div className='mainidtext'>
                  John Doe
                </div>
              </div>
              <div className='mainwaste'>
                <header>
                  Waste Type
                </header>
                 <div className='mainidtext'>
                  Plastic
                 </div>
              </div>
              <div className='mainkg'>
                <header>
                  Est.Waste (Kg)
                </header>
                <div className='mainidtext'>
                  10Kg
                </div>
              </div>
              <div className='mainstatus'>
                <header> Status</header>
                <div className='mainidtext'>
                  <span> rejected</span>
                </div>
              </div>
              <div className='mainaction'>
                <header> Action</header>
                <div className='mainidtext'>
                  ...
                </div>
              </div>
            </div>
          </div>
      

    </div>
  )
}

export default Adminmain
