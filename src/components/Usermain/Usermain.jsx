import React from 'react'
import './Usermain.css'



const Usermain = () => {
  return (
    <div className='usermain-container'>
          <div className='usermainbox'>
            <div className='usermainheader'>
                <h4> User Management</h4>
                <p>View and manage user accounts</p>
            </div>
            <div className='mainholder'>
              <div className='usermainid'>
                <header>
                  ID
                </header>
                <div className='usermainidtext'>
                  1
                </div>
              </div>
              <div className='usermainname'>
                <header>
                  Name
                </header>
                <div className='usermainidtext'>
                  John Doe
                </div>
              </div>
              <div className='usermainemail'>
                <header>
                  Email
                </header>
                 <div className='usermainidtext'>
                  Kookth@gmail.com
                 </div>
              </div>
              <div className='usermainkg'>
                <header>
                  Address
                </header>
                <div className='usermainidtext'>
                  12,demola-road,lagos
                </div>
              </div>
              <div className='usermainstatus'>
                <header> Total earned</header>
                <div className='usermainidtext'>
                N1000
                </div>
              </div>
              <div className='usermainaction'>
                <header>... </header>
              <div className='usermainidtext'>
              <span> delete</span>
              </div>
              </div>
            </div>
          </div>
      

    </div>
  )
}

export default Usermain
